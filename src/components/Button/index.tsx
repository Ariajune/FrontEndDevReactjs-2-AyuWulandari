import React from "react";

const shapes = {
  round: "rounded-[5px]",
  square: "rounded-[0px]",
} as const;
const variants = {
  fill: {
    red_50: "bg-red-50 shadow-xs text-black-900",
    deep_purple_900: "bg-deep_purple-900 text-white-A700",
    gray_100: "bg-gray-100 text-black-900",
    blue_gray_100: "bg-blue_gray-100 text-black-900",
  },
} as const;
const sizes = {
  xs: "h-[21px] pl-[26px] pr-[9px] text-xs",
  sm: "h-[29px] px-[35px] text-[11px]",
  md: "h-[33px] px-[35px] text-[13px]",
  lg: "h-[51px] px-[35px] text-2xl",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "fill",
  size = "xs",
  color = "red_50",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
