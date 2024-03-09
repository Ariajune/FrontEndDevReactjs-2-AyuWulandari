import React from "react";
import { Text } from "./..";

interface Props {
  className?: string;
  priceOne?: string;
}

export default function DesktopOneRowTwo({ priceOne = "Categories", ...props }: Props) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-start items-end w-full border-gray-500 border border-solid bg-white-A700 shadow-sm">
        <Text size="s" as="p" className="mt-0.5 ml-2 !font-inter">
          {priceOne}
        </Text>
        <div className="h-px w-[4%] mb-1 ml-2 rotate-[-54deg] bg-black-900" />
        <div className="h-px w-[6%] mb-1 rotate-[-136deg] bg-black-900" />
      </div>
    </div>
  );
}
