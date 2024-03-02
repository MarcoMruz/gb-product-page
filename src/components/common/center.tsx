import { FCWithChildren } from "@/types/common";

const Center: FCWithChildren = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      {children}
    </div>
  );
};

export default Center;
