import React from "react";
import { Text } from "./..";

interface Props {
  className?: string;
  price?: string;
}

export default function DesktopOneRow({ price = "Price", ...props }: Props) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-start items-center w-full border-gray-500_01 border border-solid bg-gray-100_01 shadow-xs">
        <Text size="s" as="p" className="ml-0.5 !font-inter">
          {price}
        </Text>
        <div className="h-px w-[5px] ml-7 sm:ml-5 rotate-[-50deg] bg-black-900" />
        <div className="h-px w-[5px] rotate-[-130deg] bg-black-900" />
      </div>
    </div>
  );
}
