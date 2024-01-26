import clsx from "clsx";
import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainerProps) => {
  return (
    <div className={clsx("w-full  max-w-[1220px] mx-auto px-5", className)}>
      {children}
    </div>
  );
};

export default Container;
