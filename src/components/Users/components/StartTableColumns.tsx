import { ColumnDef } from "@tanstack/react-table";
import { DownloadIcon } from "../../../assets/Icons.tsx";
import { statusListStars } from "../../../constants.ts";
import { RewardStar } from "../../../data/types/Rewards.ts";

export const starsTableColumns: ColumnDef<RewardStar>[] = [
  {
    accessorKey: "status",
    header: "",
    cell: ({ row }) => {
      const status = row.original.status;
      const bgColor = statusListStars.find(
        (item) => item.label === status,
      )?.color;
      const Icon = statusListStars.find((item) => item.label === status)?.icon;
      return (
        <div
          className={`flex items-center justify-center w-6 h-6 rounded-full ${bgColor}`}
        >
          {Icon && <Icon />}
        </div>
      );
    },
    size: 30,
    enableSorting: false,
  },
  {
    accessorKey: "petName",
    header: "Pet Name",
    size: 200,
    enableSorting: true,
  },
  {
    accessorKey: "product",
    header: "Product",
    size: 200,
    enableSorting: true,
  },
  {
    accessorKey: "issueDate",
    header: "Issue Date",
    size: 250,
    enableSorting: true,
  },

  {
    accessorKey: "expiryDate",
    header: "Expiry Date",
    size: 150,
    enableSorting: true,
  },
  {
    accessorKey: "size",
    header: "Size",
    size: 150,
    enableSorting: true,
  },
  {
    accessorKey: "action",
    header: () => (
      <div className="cursor-pointer">
        <DownloadIcon />
      </div>
    ),
    size: 50,
    enableSorting: false,
  },
];
