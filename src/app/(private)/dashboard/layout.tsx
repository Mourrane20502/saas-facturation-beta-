import React, { ReactNode } from "react";
import DashboardHeader from "../_components/DashboardHeader";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="relative">
        <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>
      <DashboardHeader />
      <div className="my-20">{children}</div>
    </>
  );
}
