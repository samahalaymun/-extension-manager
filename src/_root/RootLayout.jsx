import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="mx-auto py-6 px-4 md:py-10 md:px-[136px] ">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
