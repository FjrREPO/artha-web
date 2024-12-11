import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { writeContract, waitForTransactionReceipt } from "wagmi/actions";
import { mockCuratorABI } from "@/lib/abi/mockCuratorABI";
import { mockUSDCABI } from "@/lib/abi/mockUSDCABI";
import { useState } from "react";
import { config } from "@/lib/wagmi";

export const useDepositCurator = (curatorAddress: HexAddress) => {
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
        mutationFn: async ({ amount }: { amount: string }) => {
            try {
                // Reset steps
                setSteps([
                    { step: 1, status: "idle" },
                    { step: 2, status: "idle" },
                ]);

                if (!amount) {
                    throw new Error("Invalid amount");
                }

                // Step 1: Approve contract
                setSteps((prev) =>
                    prev.map((item) => {
                        if (item.step === 1) {
                            return { ...item, status: "loading" };
                        }
                        return item;
                    })
                );

                const approvalTxHash = await writeContract(config, {
                    abi: mockUSDCABI,
                    address: curatorAddress,
                    functionName: "approve",
                    args: [curatorAddress as HexAddress, BigInt(amount)],
                });

                setTxHash(approvalTxHash);

                const approvalReceipt = await waitForTransactionReceipt(config, { hash: approvalTxHash });

                if (approvalReceipt.status === "success") {
                    setSteps((prev) =>
                        prev.map((item) => {
                            if (item.step === 1) {
                                return { ...item, status: "success" };
                            }
                            return item;
                        })
                    );
                } else {
                    throw new Error("Approval transaction failed");
                }

                // Step 2: Deposit to curator
                setSteps((prev) =>
                    prev.map((item) => {
                        if (item.step === 2) {
                            return { ...item, status: "loading" };
                        }
                        return item;
                    })
                );

                const depositTxHash = await writeContract(config, {
                    abi: mockCuratorABI,
                    address: curatorAddress,
                    functionName: "deposit",
                    args: [BigInt(amount), curatorAddress as HexAddress],
                });

                setTxHash(depositTxHash);

                const depositReceipt = await waitForTransactionReceipt(config, { hash: depositTxHash });

                if (depositReceipt.status === "success") {
                    setSteps((prev) =>
                        prev.map((item) => {
                            if (item.step === 2) {
                                return { ...item, status: "success" };
                            }
                            return item;
                        })
                    );
                    toast.success("Deposit curator successfully!");
                } else {
                    throw new Error("Deposit transaction failed");
                }

                return depositReceipt;
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