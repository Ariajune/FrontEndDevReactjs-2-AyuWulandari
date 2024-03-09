import React from "react";

const sizes = {
  xs: "text-[11px] font-normal",
  lg: "text-base font-normal",
  s: "text-[13px] font-normal",
  "2xl": "text-[50px] font-normal",
  xl: "text-2xl font-normal",
  md: "text-[15px] font-normal",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "xs",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-istokweb ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
