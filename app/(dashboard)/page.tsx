import React from "react";
// import styles from "@/styles/Homepage.module.css";
// import Card from "@/components/Card";
// import { Barchart } from "@/components/Barchart";
// import { Piecharts } from "@/components/Piecharts";


export default function Home() {
  return (
    <div>
      <div className="contanaire">
        <div className="logo">
          <p className="p-2 ">Admin Dashboard</p>
        </div>
      </div>
      <main className="cards p-2 ">
        <div>
          {/* <Card /> */}
        </div>
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="w-full lg:w-1/3 ">
           {/* <Piecharts/> */}
          </div>
          <div className="w-full lg:w-2/3">
            {/* <Barchart /> */}
          </div>
        </div>
      </main>
    </div>
  );
}
