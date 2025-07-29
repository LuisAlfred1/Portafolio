import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      
      <div className="ml-64 w-full">
        <Navbar />
        <main className="pt-24 p-6 min-h-screen bg-gradient-to-t from-[#262626] to-[#1A1A1A]">
          {children}
        </main>
      </div>
    </div>
  );
}
