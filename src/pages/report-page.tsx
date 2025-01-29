import { DataTable } from '@/components/shadcn-table/data-table';
import { columns } from '@/components/shadcn-table/columns';
import { data } from '@/components/shadcn-table/data';

export function ReportPage() {
  return (
    <div className="container mx-auto">
      <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0 mb-2">
        Basic Shadcn Data Table
      </h2>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
