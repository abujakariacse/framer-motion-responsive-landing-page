import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <Sidebar />
      <div className="col-span-10 h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
