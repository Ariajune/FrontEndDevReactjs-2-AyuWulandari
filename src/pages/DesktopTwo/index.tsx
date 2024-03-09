import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button, RatingBar } from "../../components";

export default function DesktopTwoPage() {
  return (
    <>
      <Helmet>
        <title>Resturanta Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-end w-full p-[43px] md:p-5 bg-white-A700">
        <div className="flex flex-row md:flex-col justify-between items-start w-full mt-2.5 mb-[15px] mx-auto md:gap-10 max-w-[1225px]">
          <div className="flex flex-col items-start justify-start w-[68%] md:w-full gap-[3px]">
            <Heading size="lg" as="h1" className="ml-[413px] md:ml-5 !text-black-900">
              Restaurants 1
            </Heading>
            <div className="flex flex-col items-start justify-start w-[95%] md:w-full gap-[31px]">
              <Img src="images/img_background_1.png" alt="backgroundtwo" className="w-full md:h-[453px] object-cover" />
              <RatingBar
                value={1}
                isEditable={true}
                color="#d9d9d9"
                activeColor="#162574"
                size={51}
                className="flex justify-between w-[333px]"
              />
              <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
                <Heading size="md" as="h2" className="!text-black-900">
                  THAI - $$$$
                </Heading>
                <div className="flex flex-row justify-between items-start w-[24%] sm:w-full">
                  <div className="h-[37px] w-[37px] mt-px bg-green-800 rounded-[18px]" />
                  <Heading size="s" as="h3" className="!text-black-900">
                    OPEN NOW
                  </Heading>
                </div>
              </div>
              <Heading size="s" as="h4" className="w-[95%] ml-[3px] md:ml-0 !text-black-900">
                <>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni sapiente, hic <br />
                  accusamus beatae dolores quia, blanditiis repudiandae assumenda quod <br />
                  asperiores alias natus, deleniti delectus mollitia. Magnam iste nostrum ipsa <br />
                  quaerat?
                </>
              </Heading>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[25%] md:w-full mt-24 gap-[21px] md:mt-0">
            <Button color="blue_gray_100" size="lg" shape="round" className="w-full sm:px-5 font-bold">
              REVIEW
            </Button>
            <div className="flex flex-col items-start justify-start w-[99%] md:w-full p-[18px] bg-blue_gray-100">
              <Heading as="h2" className="ml-0.5 md:ml-0 !text-black-900">
                Alicia W
              </Heading>
              <Text as="p" className="mt-px ml-0.5 md:ml-0">
                the food is good
              </Text>
              <Img
                src="images/img_star_11.svg"
                alt="image"
                className="h-[15px] w-[16px] mt-[9px] mb-[281px] ml-1.5 md:ml-0"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
