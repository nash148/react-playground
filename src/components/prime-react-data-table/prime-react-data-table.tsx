import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { data } from './data';

export const PrimeReactDataTable: React.FC = () => {
  return (
    <div>
      <DataTable value={data} tableStyle={{ minWidth: '50rem' }}>
        <Column field="status" header="Status"></Column>
        <Column field="email" header="Email"></Column>
        <Column field="amount" header="Amount"></Column>
      </DataTable>
    </div>
  );
};
