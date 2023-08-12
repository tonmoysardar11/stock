import React from "react";
import Card from "./Card";

const Dashboard = () => {
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-6 grid-rows-6 pt-16 gap-1 p-2 auto-rows-fr">
      <div className="grid col-span-6 row-span-1">
        <Card>Header</Card>
      </div>
      <div className="grid col-span-6 row-span-3 md:row-span-5 md:col-span-4">
        <Card>Chart</Card>
      </div>
      <div className="grid col-span-6 row-span-1 md:col-span-2">
        <Card>Details</Card>
      </div>
      <div className="grid col-span-6 row-span-1 md:col-span-2 md:row-span-4">
        <Card>Profile</Card>
      </div>
    </div>
  );
};

export default Dashboard;