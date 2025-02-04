import * as React from "react"; 
import NextLink from 'next/link';  
import BasicTable from "@/components/UiKit/Table/BasicTable";
import DataTable from "@/components/UiKit/Table/DataTable";
import SortingSelectingTable from "@/components/UiKit/Table/SortingSelectingTable";
import CustomizedTables from "@/components/UiKit/Table/CustomizedTables";
import CustomPaginationActions from "@/components/UiKit/Table/CustomPaginationActions";
import StickyHeadTable from "@/components/UiKit/Table/StickyHeadTable";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Table</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>UI Elements</li>
          <li>Table</li>
        </ul>
      </div>

      <BasicTable />

      <DataTable />

      <SortingSelectingTable />

      <CustomizedTables />

      <CustomPaginationActions />

      <StickyHeadTable />
    </>
  );
}
