import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { writeContract, waitForTransactionReceipt } from "wagmi/actions";
import { mockArteABI } from "@/lib/abi/mockArteABI";
import { useState } from "react";
import { ADDRESS_ARTE } from "@/constants/config";
import { config } from "@/lib/wagmi";

export const useRepay = () => {
    const [steps, setSteps] = useState<
        Array<{
            step: number;
            status: "idle" | "loading" | "success" | "error";
            error?: string;
        }>
    >([
        { step: 1, status: "idle" },
    ]);

    const [txHash, setTxHash] = useState<string | null>(null);

    const mutation = useMutation({
        mutationFn: async ({
            id,
            tokenId,
            shares,
            onBehalfOf,
        }: {
            id: string;
            tokenId: string;
            shares: string;
            onBehalfOf: string;
        }) => {
            try {
                // Reset steps
                setSteps([{ step: 1, status: "idle" }]);

                if (!id || !tokenId || !shares || !onBehalfOf) {
                    throw new Error("Invalid parameters");
                }

                // Step 1: Repay
                setSteps((prev) =>
                    prev.map((item) => {
                        if (item.step === 1) {
                            return { ...item, status: "loading" };
                        }
                        return item;
                    })
                );

                const repayTxHash = await writeContract(config, {
                    abi: mockArteABI,
                    address: ADDRESS_ARTE,
                    functionName: "repay",
                    args: [
                        id,
                        BigInt(tokenId),
                        BigInt(shares),
                        onBehalfOf as HexAddress,
                    ],
                });

                setTxHash(repayTxHash);

                const repayReceipt = await waitForTransactionReceipt(config, { hash: repayTxHash });

                if (repayReceipt.status === "success") {
                    setSteps((prev) =>
                        prev.map((item) => {
                            if (item.step === 1) {
                                return { ...item, status: "success" };
                            }
                            return item;
                        })
                    );
                    toast.success("Repay successfully!");
                } else {
                    throw new Error("Repay transaction failed");
                }

                return repayReceipt;
            } catch (error) {
                console.error("Transaction error:", error);

                setSteps((prev) =>
                    prev.map((step) => {
                        if (step.status === "loading") {
                            return {
                                ...step,
                                status: "error",
                                error: error instanceof Error ? error.message : "An error occurred",
                            };
                        }
                        return step;
                    })
                );

                toast.error(error instanceof Error ? error.message : "Transaction failed. Please try again.");
                throw error;
            }
        },
    });

    return { steps, mutation, txHash };
};