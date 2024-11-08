import { Link } from "react-router-dom";
import adminLogo from "../assets/admin-logo.svg";
import NavLinks from "./NavLinks";
import { Power, Info, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="flex flex-col h-screen w-56 py-6">
      <div className="flex flex-col flex-1 shrink">
        <Link to="/admin" className="px-6">
          <img src={adminLogo} className="" alt="essend-logo" />
        </Link>
        <div className="mt-10">
          <div className="px-6 mb-2 text-admin-secondary text-xs font-bold gap-4 flex items-center">
            MENU
            <div className="w-full h-[1px] bg-admin-secondary/30"></div>
          </div>
          <NavLinks />
        </div>
      </div>
      <div className="text-[15px] flex flex-col space-y-2 px-6">
        <div className="text-admin-secondary text-xs gap-4 flex items-center font-bold">
          OTHER
          <div className="w-full h-[1px] bg-admin-secondary/30"></div>
        </div>
        <button className="flex gap-2 items-center py-2 hover:text-admin-primary">
          <Settings size={20} />
          Settings
        </button>
        <button className="flex gap-2 items-center py-2 hover:text-admin-primary">
          <Info size={20} />
          Help
        </button>
        <button className="flex gap-2 items-center py-2 hover:text-admin-primary">
          <Power size={20} />
          Exit
        </button>
      </div>
    </aside>
  );
}
