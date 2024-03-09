import React from "react";

const sizes = {
  s: "text-xl font-bold",
  md: "text-4xl font-bold",
  xs: "text-sm font-bold",
  lg: "text-[64px] font-bold",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "xs",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-istokweb ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
