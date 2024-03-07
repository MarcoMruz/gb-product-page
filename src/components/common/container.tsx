import { FCWithChildren } from "@/types/common";

type Props = {
  className?: string;
};

const Container: FCWithChildren<Props> = ({ children, className = "" }) => {
  return (
    <div className={`container mx-auto px-4 ${className}`}>{children}</div>
  );
};

export default Container;
