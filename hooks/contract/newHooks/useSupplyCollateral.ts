import { useState } from "react";
import { toast } from "sonner";
import { waitForTransactionReceipt, writeContract } from "wagmi/actions";
import { ADDRESS_ARTE } from "@/constants/config";
import { mockArteABI } from "@/lib/abi/mockArteABI";
import { config } from "@/lib/wagmi";

export const useSupplyCollateral = () => {
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

    const mutation = async ({
        id,
        tokenId,
        onBehalfOf,
    }: {
        id: string;
        tokenId: string;
        onBehalfOf: string;
    }) => {
        try {
            // Reset steps
            setSteps([
                { step: 1, status: "idle" },
                { step: 2, status: "idle" },
            ]);

            // Step 1: Initiate the supplyCollateral transaction
            setSteps((prev) =>
                prev.map((item) => (item.step === 1 ? { ...item, status: "loading" } : item))
            );

            const hash = await writeContract(config, {
                abi: mockArteABI,
                address: ADDRESS_ARTE,
                functionName: "supplyCollateral",
                args: [id, BigInt(tokenId), onBehalfOf],
            });

            setTxHash(hash);

            setSteps((prev) =>
                prev.map((item) => (item.step === 1 ? { ...item, status: "success" } : item))
            );

            // Step 2: Wait for transaction confirmation
            setSteps((prev) =>
                prev.map((item) => (item.step === 2 ? { ...item, status: "loading" } : item))
            );

            const receipt = await waitForTransactionReceipt(config, { hash });

            if (receipt) {
                setSteps((prev) =>
                    prev.map((item) => (item.step === 2 ? { ...item, status: "success" } : item))
                );
                toast.success("SupplyCollateral successfully!");
            } else {
                throw new Error("Transaction confirmation failed.");
            }
        } catch (error) {
            console.error("Transaction error:", error);
            setSteps((prev) =>
                prev.map((step) => {
                    if (step.status === "loading") {
                        return { ...step, status: "error", error: error instanceof Error ? error.message : "Transaction failed." };
                    }
                    return step;
                })
            );
            toast.error(error instanceof Error ? error.message : "Transaction failed. Please try again.");
            throw error;
        }
    };

    return { steps, mutation, txHash };
};