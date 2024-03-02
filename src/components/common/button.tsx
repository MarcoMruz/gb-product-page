import { classNames } from "@/utils/utils";
import { config } from "./config";

export type ButtonProps = {
  isLoading?: boolean;
  hasGlassEffect?: boolean;
  shadow?: keyof typeof config.shadow;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  className = "",
  shadow = "none",
  disabled = false,
  hasGlassEffect = false,
  isLoading = false,
  ...props
}: ButtonProps) => {
  const classnames = classNames(
    "btn",
    config.shadow[shadow],
    hasGlassEffect ? "glass" : "",
    className,
    disabled ? "cursor-not-allowed opacity-1/2" : "",
    isLoading ? "loading" : "",
  );

  return (
    <button className={classnames} {...props}>
      {children}
    </button>
  );
};

export default Button;
