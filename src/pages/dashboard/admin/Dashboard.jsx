import React from "react";

// import components & sections
import PageTitle from "../../../components/typography/PageTitle";
import UserTable from "../../../sections/dashboard/UserTable";

export default function Dashboard() {
  return (
    <>
      <PageTitle>Dashboard</PageTitle>

      <UserTable />
    </>
  );
}
