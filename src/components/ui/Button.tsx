import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline";
  size?: "sm" | "md" | "lg" | "icon";
}

const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md";

const variantStyles = {
  default: "bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-gray-200",
  ghost: "bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800",
  outline: "border border-gray-300 text-black dark:text-white hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800"
};

const sizeStyles = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-2.5 text-lg",
  icon: "p-2 w-10 h-10"
};

export const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = "default",
  size = "md",
  ...props
}) => {
  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
