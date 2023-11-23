import Navbar from "./dashboard/navbar/Navbar";
import Sidebar from "./dashboard/sidebar/Sidebar";
import { NextSeo } from "next-seo";

export default function Layout({ children, titleSEO = "", descSEO = "" }) {
  return (
    <div className="flex">
      <NextSeo
        title={titleSEO}
        description={descSEO}
      />
      <div className="w-1/5 bg-[color:var(--bgSoft)] p-[20px]">
        <Sidebar />
      </div>
      <div className="w-4/5 p-[20px]">
        <Navbar />
        {children}
      </div>
    </div>
  )
}