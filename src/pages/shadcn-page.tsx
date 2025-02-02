import { useEffect, useState } from 'react';
import { DataTable } from '@/components/shadcn-table/data-table';
import { columns } from '@/components/shadcn-table/columns';
import { Payment } from '@/types/types';
import { fetchData } from '@/services/demo';
import {
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
  VisibilityState,
} from '@tanstack/react-table';
import { CollapsibleCard } from '@/components/CollapsibleCard';

export function ShadcnPage() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const [data, setData] = useState<Payment[]>([]);
  const [count, setCount] = useState(0);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    manualPagination: true,
    rowCount: count,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  useEffect(() => {
    const pageIndex = table.getState().pagination.pageIndex + 1;
    const pageSize = table.getState().pagination.pageSize;
    fetchData(pageIndex, pageSize).then(({ data, count }) => {
      setData(data);
      setCount(count);
    });
  }, [table.getState().pagination]);

  return (
    <div className="container mx-auto">
      <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0 mb-2">
        Basic Shadcn Data Table
      </h2>
      <div className="space-y-4 max-w-full">
        <CollapsibleCard
          title="General points"
          statements={[
            'Uses TanstackTable for the core table functionality.',
            'Every action (filtering, searching, sorting, pagination, etc.) can be performed on either the client side or the server side, by sending query to the sever.',
            'The styling is based on Tailwindcss - everything is customizable.',
            'The code (above TanstackTable) is managed in our code base.',
          ]}
        />
        <CollapsibleCard
          title="Built-in Features"
          statements={[
            'Search bar across the table (with debouncing).',
            'Toggle column visibility.',
            'Sort by column.',
            'Column filters and global filters.',
            'Pagination (both server and client side).',
            'Custom cell/header rendering.',
            'Inline actions.',
            'Row selection + actions on selected rows.',
            'Editing (as inline edit or as form).',
          ]}
        />
      </div>
      <DataTable columns={columns} table={table} />
    </div>
  );
}
