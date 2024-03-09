import React from "react";
import { Button, Text, RatingBar, Img } from "./..";

interface Props {
  className?: string;
  image?: string;
  verylongname?: string;
  verylongname1?: React.ReactNode | string;
  price?: string;
  price1?: string;
  price2?: string;
  price3?: string;
}

export default function DesktopOneColumnOne({
  image,
  verylongname,
  verylongname1 = (
    <>
      Very Long Name Restaurants
      <br />
      number list 1
    </>
  ),
  price,
  price1 = "THAI - $$$$",
  price2,
  price3 = "OPEN NOW",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="h-[163px] w-full relative">
        {!!image ? (
          <Img
            src={image}
            alt="image_one"
            className="justify-center h-[163px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
          />
        ) : null}
      </div>
      <div className="flex flex-col items-start justify-start w-full">
        <div className="flex flex-row justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            {!!verylongname ? (
              <Text size="lg" as="p" className="mt-[-48px]">
                {verylongname}
              </Text>
            ) : null}
          </div>
        </div>
        <RatingBar
          value={1}
          isEditable={true}
          color="#d9d9d9"
          activeColor="#231194"
          size={16}
          className="flex justify-between w-[103px] mt-1"
        />
        <div className="flex flex-row justify-between w-full mt-3">
          <div className="flex flex-row justify-center w-[26%]">
            <div className="flex flex-col items-center justify-start w-full">
              {!!price ? (
                <Text as="p" className="mt-[-16px]">
                  {price}
                </Text>
              ) : null}
            </div>
          </div>
          <div className="flex flex-row justify-start items-center w-full gap-[9px]">
            <div className="flex flex-col items-center justify-start h-[7px] w-[7px] bg-green-A700 rounded-[3px]">
              <div className="h-[7px] w-[7px] bg-green-A700 rounded-[3px]" />
            </div>
            <div className="flex flex-row justify-start w-[79%]">
              <div className="flex flex-col items-center justify-start w-full">
                {!!price2 ? (
                  <Text as="p" className="mt-[-16px]">
                    {price2}
                  </Text>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <Button color="deep_purple_900" size="sm" shape="square" className="w-full mt-[13px] sm:px-5 font-bold">
          LEARN MORE
        </Button>
      </div>
    </div>
  );
}
