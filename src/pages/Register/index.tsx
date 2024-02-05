import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Radio, RadioGroup, Text } from "components";

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-plusjakartasans items-center justify-end mx-auto p-[37px] sm:px-5 w-full">
        <Img
          className="h-[100px] md:h-auto mt-8 object-cover w-[100px]"
          src="images/img_logo_100x100.png"
          alt="logo"
        />
        <div className="bg-white-A700 border-indigo-A200 border-solid border-t flex flex-col items-start justify-end mt-[50px] p-5 md:px-5 rounded-[5px] shadow-bs3 w-[54%] md:w-full">
          <div className="flex flex-row items-start justify-start md:ml-[0] ml-[15px] mt-6 w-[19%] md:w-full">
            <Text
              className="common-pointer text-base text-indigo-A700"
              size="txtPlusJakartaSansRomanRegular16IndigoA700"
              onClick={() => navigate("/landingpage")}
            >
              Home
            </Text>
            <Text
              className="ml-1 text-base text-blue_gray-600"
              size="txtPlusJakartaSansRomanRegular16"
            >
              {" "}
              /{" "}
            </Text>
            <Text
              className="ml-1 text-base text-blue_gray-600"
              size="txtPlusJakartaSansRomanRegular16"
            >
              Sign-up
            </Text>
          </div>
          <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[15px] mt-[29px]">
            <Text
              className="text-blue_gray-900 text-xl"
              size="txtPlusJakartaSansRomanBold20"
            >
              Sign-up
            </Text>
            <Text
              className="text-base text-blue_gray-600"
              size="txtPlusJakartaSansRomanRegular16"
            >
              Register yourself to do something on Comikal.
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between md:ml-[0] ml-[15px] mt-[37px] w-[96%] md:w-full">
            <div className="flex flex-col gap-[26px] items-center justify-start w-[48%] md:w-full">
              <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                <Text
                  className="text-base text-blue_gray-900"
                  size="txtPlusJakartaSansRomanBold16"
                >
                  First name
                </Text>
                <Input
                  name="groupFortyFour"
                  placeholder="Enter your first name"
                  className="font-medium p-0 placeholder:text-blue_gray-600 text-left text-sm w-full"
                  wrapClassName="w-full"
                  color="indigo_A700"
                ></Input>
              </div>
              <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                <Text
                  className="text-base text-blue_gray-900"
                  size="txtPlusJakartaSansRomanBold16"
                >
                  Username
                </Text>
                <Input
                  name="groupFortyThree"
                  placeholder="e.g. comikaluser123"
                  className="p-0 placeholder:text-gray-500_01 text-left text-sm w-full"
                  wrapClassName="w-full"
                ></Input>
              </div>
              <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                <Text
                  className="text-base text-blue_gray-900"
                  size="txtPlusJakartaSansRomanBold16"
                >
                  Phone
                </Text>
                <Input
                  name="e.g.Counter"
                  placeholder="e.g. (647)-111-1111"
                  className="p-0 placeholder:text-gray-500_01 text-left text-sm w-full"
                  wrapClassName="w-full"
                ></Input>
              </div>
              <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                <Text
                  className="text-base text-blue_gray-900"
                  size="txtPlusJakartaSansRomanBold16"
                >
                  Address
                </Text>
                <Input
                  name="groupFortyOne"
                  placeholder="e.g. Toronto, ON"
                  className="p-0 placeholder:text-gray-500_01 text-left text-sm w-full"
                  wrapClassName="w-full"
                ></Input>
              </div>
              <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                <Text
                  className="text-base text-blue_gray-900"
                  size="txtPlusJakartaSansRomanBold16"
                >
                  Password
                </Text>
                <Input
                  name="groupForty"
                  placeholder="e.g. 4kuBu7uhM3dk1t"
                  className="p-0 placeholder:text-gray-500_01 text-left text-sm w-full"
                  wrapClassName="flex w-full"
                  suffix={
                    <Img
                      className="mt-auto mb-[3px] h-[15px] ml-[35px]"
                      src="images/img_eye.svg"
                      alt="eye"
                    />
                  }
                ></Input>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[48%] md:w-full">
              <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                <Text
                  className="text-base text-blue_gray-900"
                  size="txtPlusJakartaSansRomanBold16"
                >
                  Last Name
                </Text>
                <Input
                  name="e.g.Counter_One"
                  placeholder="Enter your last name"
                  className="p-0 placeholder:text-gray-500_01 text-left text-sm w-full"
                  wrapClassName="w-full"
                ></Input>
              </div>
              <div className="flex flex-col gap-[9px] items-start justify-start mt-[25px] w-full">
                <Text
                  className="text-base text-blue_gray-900"
                  size="txtPlusJakartaSansRomanBold16"
                >
                  Email
                </Text>
                <Input
                  name="groupThirtyEight"
                  placeholder="e.g. comikal.user@gmail.com"
                  className="p-0 placeholder:text-gray-500_01 text-left text-sm w-full"
                  wrapClassName="w-full"
                ></Input>
              </div>
              <div className="flex flex-col gap-[9px] items-start justify-start mt-[25px] w-full">
                <Text
                  className="text-base text-blue_gray-900"
                  size="txtPlusJakartaSansRomanBold16"
                >
                  Born
                </Text>
                <Input
                  name="groupThirtySeven"
                  placeholder="05/23/2000"
                  className="!placeholder:text-blue_gray-600 !text-blue_gray-600 font-medium p-0 text-left text-sm w-full"
                  wrapClassName="flex w-full"
                  suffix={
                    <Img
                      className="mt-px mb-0.5 h-[15px] ml-[35px]"
                      src="images/img_date.svg"
                      alt="Date"
                    />
                  }
                ></Input>
              </div>
              <div className="flex flex-col items-center justify-start mt-[25px] w-[52%] md:w-full">
                <div className="flex flex-col gap-[19px] items-start justify-start w-full">
                  <Text
                    className="text-base text-blue_gray-900"
                    size="txtPlusJakartaSansRomanBold16"
                  >
                    Gender
                  </Text>
                  <RadioGroup
                    className="flex w-full"
                    name="radiogroupmale"
                  >
                    <Radio
                      value="Male"
                      className="font-bold text-blue_gray-600 text-left text-sm"
                      inputClassName="border-2 border-gray-300 border-solid h-5 mr-[5px] w-5"
                      checked={false}
                      name="radiogroupmale"
                      label="Male"
                      id="Male"
                    ></Radio>
                    <Radio
                      value="Female"
                      className="font-bold ml-5 text-blue_gray-600 text-left text-sm"
                      inputClassName="border-2 border-gray-300 border-solid h-5 mr-[5px] w-5"
                      checked={false}
                      name="radiogroupmale"
                      label="Female"
                      id="Female"
                    ></Radio>
                  </RadioGroup>
                </div>
              </div>
              <div className="flex flex-col gap-[9px] items-start justify-start mt-[35px] w-full">
                <Text
                  className="text-base text-blue_gray-900"
                  size="txtPlusJakartaSansRomanBold16"
                >
                  Confirm Password
                </Text>
                <Input
                  name="groupThirtySix"
                  placeholder="e.g. 4kuBu7uhM3dk1t"
                  className="p-0 placeholder:text-gray-500_01 text-left text-sm w-full"
                  wrapClassName="flex w-full"
                  suffix={
                    <Img
                      className="mt-auto mb-[3px] h-[15px] ml-[35px]"
                      src="images/img_eye.svg"
                      alt="eye"
                    />
                  }
                ></Input>
              </div>
            </div>
          </div>
          <Button
            className="common-pointer cursor-pointer font-bold min-w-[660px] md:min-w-full md:ml-[0] ml-[15px] mt-7 text-center text-sm"
            onClick={() => navigate("/login")}
            shape="round"
          >
            Sign-up
          </Button>
        </div>
        <Text
          className="mt-[52px] text-blue_gray-600 text-center text-sm"
          size="txtPlusJakartaSansRomanRegular14"
        >
          © 2024 Comikal. All rights reserved.
        </Text>
      </div>
    </>
  );
};

export default RegisterPage;
