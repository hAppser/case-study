"use client";

import { useMemo } from "react";
import {
  ColumnDef,
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import { useMetricsQuery, Metric } from "@/shared/hooks/useMetricsQuery";

const MetricsTable = () => {
  const { data: metrics = [], isLoading, error } = useMetricsQuery();

  const columns = useMemo<ColumnDef<Metric>[]>(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "name",
        header: "Name",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "category",
        header: "Category",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "value",
        header: "Value",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "date",
        header: "Date",
        cell: (info) => info.getValue(),
      },
    ],
    []
  );

  const table = useReactTable({
    data: metrics,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading metrics</div>;

  return (
    <>
      <table className="w-full overflow-x-auto border border-gray-200">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="bg-gray-800">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="sm:px-2 sm:py-1 md:px-4 md:py-2 border"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="bg-gray-700 hover:bg-gray-600">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-1 sm:px-2 sm:py-1 md:px-4 md:py-2 border"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MetricsTable;
