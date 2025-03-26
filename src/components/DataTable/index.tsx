import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import React, { useMemo } from "react";
import {
  ArrowsIcon,
  LeftDoubleArrowIcon,
  LeftSingleArrowIcon,
  RightDoubleArrowIcon,
  RightSingleArrowIcon,
} from "../../assets/Icons.tsx";
import { TableContainerProps } from "../../data/types/Rewards.ts";

const TableContainer = ({
  bodyData,
  columns,
  bodyRowClassName,
  tableClassName,
  headerClassName,
  onRowClick,
}: TableContainerProps) => {
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const data = useMemo(() => bodyData, [bodyData]);

  const table = useReactTable({
    columns,
    data,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      sorting,
      pagination,
    },
  });

  //   const checkForActionColumn = (columns: ColumnDef<User>[]): boolean =>
  //     columns.some(
  //       (item) =>
  //         ("accessorKey" in item && item.accessorKey === "action") ||
  //         ("columns" in item && checkForActionColumn(item.columns || [])),
  //     );

  const pageCount = table.getPageCount();
  const currentPage = table.getState().pagination.pageIndex + 1;

  const getPaginationButtons = () => {
    const pages: (number | string)[] = [];

    if (pageCount <= 7) {
      pages.push(...Array.from({ length: pageCount }, (_, i) => i + 1));
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", pageCount - 1, pageCount);
      } else if (currentPage >= pageCount - 2) {
        pages.push(1, 2, "...", pageCount - 2, pageCount - 1, pageCount);
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          pageCount,
        );
      }
    }
    return pages;
  };

  return (
    <div className="relative h-full w-full flex flex-col bg-white">
      <div className="overflow-auto pb-2 h-auto table-scrollbar">
        <table className={`w-full ${tableClassName}`}>
          <thead className="sticky top-0 z-10  text-left text-xs text-black font-semibold capitalize">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b border-light-gray">
                {headerGroup.headers.map((header, index) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      className={`${index === 0 ? "pl-3 pr-3" : "px-3"} py-8`}
                      style={{ width: header.getSize() }}
                    >
                      {header.isPlaceholder ? null : (
                        <div
                          className={` ${
                            header.column.getCanSort()
                              ? "cursor-pointer select-none flex items-center gap-2"
                              : ""
                          } ${headerClassName}`}
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                          {header.column.getCanSort() && (
                            <div className="flex-grow">
                              <ArrowsIcon />
                            </div>
                          )}
                        </div>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody className="text-xs font-normal text-dark-gray">
            {table.getRowModel().rows.map((row) => {
              return (
                <tr
                  key={row.id}
                  onClick={() => onRowClick?.(row)}
                  className={`h-[4.75rem] border-b border-light-gray ${
                    onRowClick ? "cursor-pointer" : "cursor-auto"
                  } ${bodyRowClassName}`}
                >
                  {row.getVisibleCells().map((cell, index) => {
                    return (
                      <td
                        key={cell.id}
                        className={`font-normal py-4 ${
                          index === 0 ? "pl-3 pr-3" : "px-3"
                        }`}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {bodyData.length > 0 && (
        <div className="flex items-center justify-between py-5 px-3">
          <div className="text-dark-gray font-normal text-xs flex items-center gap-3">
            <div className="flex items-center gap-3">
              <p> Rows per page: </p>

              <select
                className="py-3 pl-2 pr-5 border border-light-gray rounded"
                value={table.getState().pagination.pageSize}
                onChange={(e) => {
                  table.setPageSize(Number(e.target.value));
                }}
              >
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>
            </div>
            Displaying {table.getRowModel().rows.length.toLocaleString()} of{" "}
            {table.getRowCount().toLocaleString()} results
          </div>
          <div className="flex items-center justify-end">
            <button
              className="btn-pagination rounded-l"
              onClick={() => table.firstPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <LeftDoubleArrowIcon />
            </button>
            <button
              className="btn-pagination"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <LeftSingleArrowIcon />
            </button>
            {getPaginationButtons().map((page, index) => {
              if (typeof page === "string") {
                return (
                  <span key={index} className="ellipsis btn-pagination">
                    {page}
                  </span>
                );
              }
              return (
                <button
                  key={`${page}_${index}`}
                  onClick={() => {
                    table.setPageIndex(page - 1);
                  }}
                  className={`
                                    ${
                                      page === currentPage
                                        ? "border-purple"
                                        : "border-light-gray"
                                    } btn-pagination
                                `}
                >
                  {page}
                </button>
              );
            })}
            <button
              className="btn-pagination"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <RightSingleArrowIcon />
            </button>
            <button
              className="btn-pagination rounded-r "
              onClick={() => table.lastPage()}
              disabled={!table.getCanNextPage()}
            >
              <RightDoubleArrowIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableContainer;
