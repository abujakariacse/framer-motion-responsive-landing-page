import { cn } from "@/lib/utils";
import { LayoutDashboardIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-light-gray col-span-2 h-screen sticky top-0 overflow-scroll p-4 lg:p-5">
      <nav className="flex flex-col text-lg font-medium gap-4">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            cn(
              "p-3 bg-gray rounded-md  transition-all  flex items-center gap-2",
              {
                "text-white bg-dark-gray": isActive,
              }
            )
          }
        >
          <LayoutDashboardIcon className="shrink-0" />
          <span className="truncate">Dashboard</span>
        </NavLink>
        <NavLink
          to="/admin/add-service"
          className={({ isActive }) =>
            cn(
              "p-3 bg-gray rounded-md  transition-all  flex items-center gap-2",
              {
                "text-white bg-dark-gray": isActive,
              }
            )
          }
        >
          <LayoutDashboardIcon className="shrink-0" />
          <span className="truncate"> Add Service</span>
        </NavLink>
        <NavLink
          to="/admin/service-list"
          className={({ isActive }) =>
            cn(
              "p-3 bg-gray rounded-md  transition-all  flex items-center gap-2",
              {
                "text-white bg-dark-gray": isActive,
              }
            )
          }
        >
          <LayoutDashboardIcon className="shrink-0" />
          <span className="truncate">Service List</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
