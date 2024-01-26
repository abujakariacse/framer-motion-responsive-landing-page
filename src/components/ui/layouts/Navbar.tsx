import { NavLink } from "react-router-dom";
import { Button } from "../button";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div>
      <motion.header
        className="h-16 fixed w-full z-[999]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <nav className="w-full h-full max-w-[1220px] mx-auto  px-5  flex justify-between items-center ">
          <span className="text-3xl">iRepair</span>
          <ul className="space-x-5">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/login">
              <Button>Login</Button>
            </NavLink>
          </ul>
        </nav>
      </motion.header>
    </div>
  );
};

export default Navbar;
