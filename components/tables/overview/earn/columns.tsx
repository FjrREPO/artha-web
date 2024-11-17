import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./ColumnHeader";
import { EarnSchema } from "@/lib/validation/types";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { formatAddress } from "@/lib/utils";

export function columns(): ColumnDef<EarnSchema>[] {
  return [
    {
      accessorKey: "#",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="#"
        />
      ),
      cell: ({ row }) => (
        <span>{row.index + 1}</span>
      ),
    },
    {
      accessorKey: "curator",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Curator"
        />
      ),
      cell: ({ row }) => {
        const openExplorer = () => {
          window.open("https://sepolia.basescan.org/address/" + row.original.curator, '_blank', 'noopener noreferrer');
        };
        return (
          <div>
            <Label>{formatAddress(row.original.curator, 4)}</Label>
            <Button
              variant="ghost"
              size="icon"
              onClick={openExplorer}
              className="shrink-0"
              aria-label="View in explorer"
            >
              <ExternalLink className="h-4 w-4 text-gray-500" />
            </Button>
          </div>
        )
      },
    },
    {
      accessorKey: "APY",
    },
    {
      accessorKey: "TVL",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="TVL"
          className="justify-end"
        />
      ),
    }
  ];
}