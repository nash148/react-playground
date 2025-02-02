import React from 'react';
import { PrimeReactDataTable } from '@/components/prime-react-data-table/prime-react-data-table';

export const PrimeReactPage: React.FC = () => {
  return (
    <div>
      <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0 mb-2">
        PrimeReact Data Table
      </h2>
      <PrimeReactDataTable />
    </div>
  );
};
