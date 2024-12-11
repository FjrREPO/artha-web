import { toast } from "sonner";
import { useAccount } from "wagmi";
import { useMutation } from "@tanstack/react-query";
import { writeContract, waitForTransactionReceipt } from "wagmi/actions";
import { ADDRESS_ARTE } from "@/constants/config";
import { mockArteABI } from "@/lib/abi/mockArteABI";
import { useState } from "react";
import { config } from "@/lib/wagmi";

export const useBorrow = () => {
    const { address: userAddress } = useAccount();

    const [steps, setSteps] = useState<
        Array<{
            step: number;
            status: "idle" | "loading" | "success" | "error";
            error?: string;
        }>
    >([
        { step: 1, status: "idle" },
        { step: 2, status: "idle" },
    ]);

    const [txHash, setTxHash] = useState<string | null>(null);

    const mutation = useMutation({
        mutationFn: async ({
            poolId,
            tokenId,
            amount,
        }: {
            poolId: string;
            tokenId: string;
            amount: string;
        }) => {
            try {
                // Reset steps
                setSteps([
                    { step: 1, status: "idle" },
                    { step: 2, status: "idle" },
                ]);

                if (!userAddress || !amount || !poolId || !tokenId) {
                    throw new Error("Invalid parameters");
                }

                // Step 1: Write contract
                setSteps((prev) =>
                    prev.map((item) => {
                        if (item.step === 1) {
                            return { ...item, status: "loading" };
                        }
                        return item;
                    })
                );

                const txHash = await writeContract(config, {
                    abi: mockArteABI,
                    address: ADDRESS_ARTE,
                    functionName: "borrow",
                    args: [
                        poolId,
                        BigInt(tokenId),
                        BigInt(amount),
                        userAddress,
                        userAddress,
                    ],
                });
                setTxHash(txHash);

                setSteps((prev) =>
                    prev.map((item) => {
                        if (item.step === 1) {
                            return { ...item, status: "success" };
                        }
                        return item;
                    })
                );

                // Step 2: Wait for transaction receipt
                setSteps((prev) =>
                    prev.map((item) => {
                        if (item.step === 2) {
                            return { ...item, status: "loading" };
                        }
                        return item;
                    })
                );

                const receipt = await waitForTransactionReceipt(config, { hash: txHash });

                if (receipt.status === "success") {
                    setSteps((prev) =>
                        prev.map((item) => {
                            if (item.step === 2) {
                                return { ...item, status: "success" };
                            }
                            return item;
                        })
                    );

                    toast.success("Borrow successfully!");
                } else {
                    throw new Error("Transaction failed");
                }

                return receipt;
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