import * as React from "react"; 
import NextLink from 'next/link'; 
import TopSellingProducts from "@/components/Tables/TopSellingProducts";
import RecentOrders from "@/components/Tables/RecentOrders"; 
import RecentLeads from "@/components/Tables/RecentLeads";
import AllProjects from "@/components/Tables/AllProjects";
import MyTasks from "@/components/Tables/MyTasks";  
import RecentCustomerRatings from "@/components/Tables/RecentCustomerRatings";
import ToDoList from "@/components/Tables/ToDoList";
import PerformanceOfAgents from "@/components/Tables/PerformanceOfAgents";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Data Table</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Tables</li>
          <li>Data Table</li>
        </ul>
      </div>

      <AllProjects />

      <TopSellingProducts />
  
      <RecentOrders />
  
      <RecentLeads />
     
      <MyTasks />

      <PerformanceOfAgents />

      <RecentCustomerRatings />

      <ToDoList />
    </>
  );
}
