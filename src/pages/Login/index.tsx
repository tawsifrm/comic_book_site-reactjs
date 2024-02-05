import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-plusjakartasans items-center justify-end mx-auto p-[37px] sm:px-5 w-full">
        <Img
          className="h-[100px] md:h-auto mt-8 object-cover w-[100px]"
          src="images/img_logo_100x100.png"
          alt="logo"
        />
        <div className="bg-white-A700 border-indigo-A200 border-solid border-t flex flex-col items-start justify-end mt-[50px] p-5 md:px-5 rounded-[5px] shadow-bs3 w-[30%] md:w-full">
          <div className="flex flex-row items-start justify-start ml-4 md:ml-[0] mt-6 w-[30%] md:w-full">
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
            <a href="javascript:" className="ml-1 text-base text-blue_gray-600">
              <Text size="txtPlusJakartaSansRomanRegular16">Login</Text>
            </a>
          </div>
          <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[15px] mt-[29px]">
            <a href="javascript:" className="text-blue_gray-900 text-xl">
              <Text size="txtPlusJakartaSansRomanBold20">Login</Text>
            </a>
            <Text
              className="text-base text-blue_gray-600"
              size="txtPlusJakartaSansRomanRegular16"
            >
              Input your username and password.
            </Text>
          </div>
          <div className="flex flex-col gap-[25px] items-center justify-start md:ml-[0] ml-[15px] mt-[37px] w-[92%] md:w-full">
            <div className="flex flex-col gap-[9px] items-start justify-start w-full">
              <Text
                className="text-base text-blue_gray-900"
                size="txtPlusJakartaSansRomanBold16"
              >
                Username
              </Text>
              <Input
                name="groupFortySeven"
                placeholder="Enter your username"
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
                Password
              </Text>
              <Input
                name="groupFortySix"
                placeholder="Enter your password"
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
          <Button
            className="cursor-pointer font-bold min-w-[330px] md:ml-[0] ml-[15px] mt-7 text-center text-sm"
            shape="round"
          >
            Login
          </Button>
        </div>
        <div className="flex flex-col gap-[45px] items-center justify-start mt-[53px] md:px-5">
          <Text
            className="common-pointer text-blue_gray-600 text-center text-sm"
            size="txtPlusJakartaSansRomanRegular14"
            onClick={() => navigate("/register")}
          >
            <span className="text-blue_gray-600 font-plusjakartasans font-normal">
              Don’t have an account?{" "}
            </span>
            <span className="text-indigo-A700 font-plusjakartasans font-normal">
              Create one!
            </span>
          </Text>
          <Text
            className="text-blue_gray-600 text-center text-sm"
            size="txtPlusJakartaSansRomanRegular14"
          >
            © 2024 Comikal. All rights reserved.
          </Text>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
