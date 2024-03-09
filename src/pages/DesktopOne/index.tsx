import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Text, RatingBar, Img } from "../../components";

export default function DesktopOnePage() {
  return (
    <>
      <Helmet>
        <title>Resturanta Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-start w-full p-1.5 bg-white-A700">
        <div className="flex flex-row md:flex-col justify-start items-start w-full mt-[35px] gap-2.5 mx-auto md:gap-5 md:px-5 max-w-[1081px]">
          <Img src="images/img_star_5.svg" alt="image" className="h-[16px] w-[2%] mt-[186px] md:mt-0" />
          <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
            <Text size="2xl" as="p" className="!font-inter">
              Restaurants
            </Text>
            <Text size="md" as="p" className="w-[47%] mt-1.5 !font-inter">
              <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid culpa
                <br /> architecto error praesentium, soluta commodi.
              </>
            </Text>
            <div className="h-px w-full mt-[21px] bg-black-900" />
            <div className="flex flex-row sm:flex-col justify-between items-center w-[45%] md:w-full mt-3.5 ml-[9px] md:ml-0 sm:gap-10">
              <div className="flex flex-row justify-start items-center w-[64%] sm:w-full gap-[30px]">
                <div className="flex flex-row justify-start items-center w-[61%] gap-[19px]">
                  <Text size="md" as="p" className="!font-inter">
                    Filter by :
                  </Text>
                  <Button
                    shape="square"
                    className="sm:pl-5 font-inter border-gray-700 border border-solid min-w-[95px]"
                  >
                    Open Now
                  </Button>
                </div>
                <div className="flex flex-row justify-start w-[30%]">
                  <div className="flex flex-row justify-start items-center w-full border-gray-500_01 border border-solid bg-gray-100_01 shadow-xs">
                    <Text size="s" as="p" className="ml-0.5 !font-inter">
                      Price
                    </Text>
                    <div className="h-px w-[5px] ml-7 sm:ml-5 rotate-[-50deg] bg-black-900" />
                    <div className="h-px w-[5px] rotate-[-130deg] bg-black-900" />
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center w-[25%] sm:w-full">
                <div className="flex flex-row justify-start items-end w-full border-gray-500 border border-solid bg-white-A700 shadow-sm">
                  <Text size="s" as="p" className="mt-0.5 ml-2 !font-inter">
                    Categories
                  </Text>
                  <div className="h-px w-[4%] mb-1 ml-2 rotate-[-54deg] bg-black-900" />
                  <div className="h-px w-[6%] mb-1 rotate-[-136deg] bg-black-900" />
                </div>
              </div>
            </div>
            <div className="h-px w-full mt-5 bg-black-900" />
            <Text size="xl" as="p" className="mt-6 !font-inter">
              All Resturant
            </Text>
            <div className="w-full mt-[23px] gap-[39px] grid-cols-4 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
              <div className="flex flex-col items-center justify-start w-full gap-[13px]">
                <div className="h-[163px] w-full relative">
                  <Img
                    src="images/img_background_1.png"
                    alt="image"
                    className="justify-center h-[163px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <Img
                    src="images/img_background_1.png"
                    alt="image_one"
                    className="justify-center h-[163px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text size="lg" as="p">
                        <>
                          Very Long Name Restaurants
                          <br />
                          number list 1
                        </>
                      </Text>
                      <Text size="lg" as="p" className="mt-[-48px]">
                        <>
                          Very Long Name Restaurants
                          <br />
                          number list 1
                        </>
                      </Text>
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
                        <Text as="p">THAI - $$$$</Text>
                        <Text as="p" className="mt-[-16px]">
                          THAI - $$$$
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-[33%]">
                      <div className="flex flex-row justify-start items-center w-full gap-[9px]">
                        <div className="flex flex-col items-center justify-start h-[7px] w-[7px] bg-green-A700 rounded-[3px]">
                          <div className="h-[7px] w-[7px] bg-green-A700 rounded-[3px]" />
                        </div>
                        <div className="flex flex-row justify-start w-[79%]">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Text as="p">OPEN NOW</Text>
                            <Text as="p" className="mt-[-16px]">
                              OPEN NOW
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    color="deep_purple_900"
                    size="sm"
                    shape="square"
                    className="w-full mt-[13px] sm:px-5 font-bold"
                  >
                    LEARN MORE
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[11px]">
                <Img
                  src="images/img_background_1.png"
                  alt="backgroundone"
                  className="w-full md:h-auto sm:w-full object-cover"
                />
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text size="lg" as="p">
                      Restaurants 2
                    </Text>
                    <RatingBar
                      value={1}
                      isEditable={true}
                      color="#d9d9d9"
                      activeColor="#231194"
                      size={16}
                      className="flex justify-between w-[103px] mt-[29px]"
                    />
                    <div className="flex flex-row justify-between w-[93%] md:w-full mt-3">
                      <Text as="p" className="mt-px">
                        SEAFOOD - $
                      </Text>
                      <div className="flex flex-row justify-start items-center w-[28%] gap-[9px]">
                        <div className="h-[7px] w-[7px] bg-red-800 rounded-[3px]" />
                        <Text as="p">CLOSED</Text>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="flex justify-center items-center w-[233px] h-[29px] mt-[13px] px-[35px] py-1.5 sm:px-5 bg-deep_purple-900"
                    >
                      <Heading as="h1" className="!text-[11px]">
                        LEARN MORE
                      </Heading>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[11px]">
                <Img
                  src="images/img_background_1.png"
                  alt="backgroundone"
                  className="w-full md:h-auto sm:w-full object-cover"
                />
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text size="lg" as="p">
                      Restaurant 3
                    </Text>
                    <RatingBar
                      value={1}
                      isEditable={true}
                      color="#d9d9d9"
                      activeColor="#231194"
                      size={16}
                      className="flex justify-between w-[103px] mt-[29px]"
                    />
                    <div className="flex flex-row justify-between w-full mt-3">
                      <Text as="p" className="mt-px">
                        JAPANESE - $$$
                      </Text>
                      <div className="flex flex-row justify-start items-center w-[33%] gap-[9px]">
                        <div className="h-[7px] w-[7px] bg-green-A700 rounded-[3px]" />
                        <Text as="p">OPEN NOW</Text>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="flex justify-center items-center w-[233px] h-[29px] mt-[13px] px-[35px] py-1.5 sm:px-5 bg-deep_purple-900"
                    >
                      <Heading as="h2" className="!text-[11px]">
                        LEARN MORE
                      </Heading>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[11px]">
                <Img
                  src="images/img_background_1.png"
                  alt="backgroundone"
                  className="w-full md:h-auto sm:w-full object-cover"
                />
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text size="lg" as="p">
                      Restaurants 4
                    </Text>
                    <RatingBar
                      value={1}
                      isEditable={true}
                      color="#d9d9d9"
                      activeColor="#231194"
                      size={16}
                      className="flex justify-between w-[103px] mt-[29px]"
                    />
                    <div className="flex flex-row justify-between w-full mt-3">
                      <Text as="p" className="mt-px">
                        ITALIAN - $$
                      </Text>
                      <div className="flex flex-row justify-start items-center w-[33%] gap-[9px]">
                        <div className="h-[7px] w-[7px] bg-green-A700 rounded-[3px]" />
                        <Text as="p">OPEN NOW</Text>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="flex justify-center items-center w-[233px] h-[29px] mt-[13px] px-[35px] py-1.5 sm:px-5 bg-deep_purple-900"
                    >
                      <Heading as="h3" className="!text-[11px]">
                        LEARN MORE
                      </Heading>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[11px]">
                <Img
                  src="images/img_background_1.png"
                  alt="backgroundone"
                  className="w-full md:h-auto sm:w-full object-cover"
                />
                <div className="flex flex-col items-start justify-start w-full">
                  <Text size="lg" as="p">
                    Restaurants 6
                  </Text>
                  <RatingBar
                    value={1}
                    isEditable={true}
                    color="#d9d9d9"
                    activeColor="#231194"
                    size={16}
                    className="flex justify-between w-[103px] mt-[29px]"
                  />
                  <div className="flex flex-row justify-between w-full mt-3">
                    <Text as="p" className="mt-px">
                      MEXICAN - $$$$
                    </Text>
                    <div className="flex flex-row justify-start items-center w-[33%] gap-[9px]">
                      <div className="h-[7px] w-[7px] bg-green-A700 rounded-[3px]" />
                      <Text as="p">OPEN NOW</Text>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="flex justify-center items-center w-[233px] h-[29px] mt-[13px] px-[35px] py-1.5 sm:px-5 bg-deep_purple-900"
                  >
                    <Heading as="h4" className="!text-[11px]">
                      LEARN MORE
                    </Heading>
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Img
                    src="images/img_background_1.png"
                    alt="backgroundone"
                    className="w-full md:h-auto sm:w-full object-cover"
                  />
                  <Text size="lg" as="p" className="mt-[11px]">
                    Restaurants 5
                  </Text>
                  <RatingBar
                    value={1}
                    isEditable={true}
                    color="#d9d9d9"
                    activeColor="#231194"
                    size={16}
                    className="flex justify-between w-[103px] mt-[29px]"
                  />
                  <div className="flex flex-row justify-between w-[93%] md:w-full mt-3">
                    <Text as="p" className="mt-px">
                      AMERICAN - $
                    </Text>
                    <div className="flex flex-row justify-start items-center w-[28%] gap-[9px]">
                      <div className="h-[7px] w-[7px] bg-red-800 rounded-[3px]" />
                      <Text as="p">CLOSED</Text>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="flex justify-center items-center w-[233px] h-[29px] mt-[13px] px-[35px] py-1.5 sm:px-5 bg-deep_purple-900"
                  >
                    <Heading as="h5" className="!text-[11px]">
                      LEARN MORE
                    </Heading>
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Img
                  src="images/img_background_1.png"
                  alt="backgroundone"
                  className="w-full md:h-auto sm:w-full object-cover"
                />
                <Text size="lg" as="p" className="mt-[11px]">
                  Restaurants 7
                </Text>
                <RatingBar
                  value={1}
                  isEditable={true}
                  color="#d9d9d9"
                  activeColor="#231194"
                  size={16}
                  className="flex justify-between w-[103px] mt-[29px]"
                />
                <div className="flex flex-row justify-between w-full mt-3">
                  <Text as="p" className="mt-px">
                    STEAKHOUSE- $$
                  </Text>
                  <div className="flex flex-row justify-start items-center w-[33%] gap-[9px]">
                    <div className="h-[7px] w-[7px] bg-green-A700 rounded-[3px]" />
                    <Text as="p">OPEN NOW</Text>
                  </div>
                </div>
                <a
                  href="#"
                  className="flex justify-center items-center w-[233px] h-[29px] mt-[13px] px-[35px] py-1.5 sm:px-5 bg-deep_purple-900"
                >
                  <Heading as="h6" className="!text-[11px]">
                    LEARN MORE
                  </Heading>
                </a>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Img
                    src="images/img_background_1.png"
                    alt="backgroundone"
                    className="w-full md:h-auto sm:w-full object-cover"
                  />
                  <Text size="lg" as="p" className="mt-[11px]">
                    Restaurants 8
                  </Text>
                  <RatingBar
                    value={1}
                    isEditable={true}
                    color="#d9d9d9"
                    activeColor="#231194"
                    size={16}
                    className="flex justify-between w-[103px] mt-[29px]"
                  />
                  <div className="flex flex-row justify-between w-full mt-3">
                    <Text as="p" className="mt-px">
                      MEXICAN - $$$$
                    </Text>
                    <div className="flex flex-row justify-start items-center w-[33%] gap-[9px]">
                      <div className="h-[7px] w-[7px] bg-green-A700 rounded-[3px]" />
                      <Text as="p">OPEN NOW</Text>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="flex justify-center items-center w-[233px] h-[29px] mt-[13px] px-[35px] py-1.5 sm:px-5 bg-deep_purple-900"
                  >
                    <Heading as="p" className="!text-[11px]">
                      LEARN MORE
                    </Heading>
                  </a>
                </div>
              </div>
            </div>
            <Button
              color="gray_100"
              size="md"
              shape="square"
              className="mt-2 ml-[394px] md:ml-5 sm:px-5 font-bold border-deep_purple-900 border border-solid min-w-[275px] sm:min-w-full"
            >
              LOAD MORE
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
