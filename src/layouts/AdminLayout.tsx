import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function AdminLayout() {
  return (
    <div className="flex flex-col h-screen font-admin font-medium text-white bg-admin-background antialiased">
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
