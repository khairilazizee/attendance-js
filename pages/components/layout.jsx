import Navbar from "./dashboard/navbar/Navbar";
import Sidebar from "./dashboard/sidebar/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex">
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