import { NavLink } from "react-router-dom";
import { Gem, Users, LayoutDashboard, ChartPie } from "lucide-react";

const links = [
  {
    name: "dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "analytics",
    href: "/admin/analytics",
    icon: ChartPie,
  },
  {
    name: "jewelry",
    href: "/admin/jewelry",
    icon: Gem,
  },
  {
    name: "users",
    href: "/admin/users",
    icon: Users,
  },
];

export default function NavLinks() {
  return (
    <nav className="space-y-2">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <NavLink
            key={link.name}
            to={link.href}
            end
            className={({ isActive }) =>
              `flex items-center gap-2 py-2 px-6 text-[15px] ${
                isActive
                  ? "text-admin-primary border-l-2 border-admin-primary bg-gradient-to-r from-admin-primary/40 to-admin-background to-10%"
                  : "hover:text-admin-primary"
              }`
            }
          >
            <LinkIcon size={20} />
            <div className="capitalize">{link.name}</div>
          </NavLink>
        );
      })}
    </nav>
  );
}
