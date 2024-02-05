import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";

const LandingPagePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-plusjakartasans sm:gap-10 md:gap-10 gap-60 items-end justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start md:px-5 w-[92%] md:w-full">
          <div className="md:h-[1023px] h-[713px] relative w-full">
            <Img
              className="absolute h-[713px] inset-y-[0] my-auto right-[0]"
              src="images/img_cover.svg"
              alt="cover"
            />
            <div className="absolute bottom-[5%] flex md:flex-col flex-row md:gap-10 items-start justify-between left-[0] w-[85%]">
              <div className="flex flex-col items-start justify-start w-[55%] md:w-full">
                <Text
                  className="leading-[89.00px] md:text-5xl text-[76px] text-black-900 tracking-[-3.04px]"
                  size="txtPlusJakartaSansExtraBold76"
                >
                  <span className="text-blue_gray-900 font-plusjakartasans text-left font-extrabold">
                    <>
                      Search & review
                      <br />
                    </>
                  </span>
                  <span className="text-blue_gray-900 font-plusjakartasans text-left font-extrabold">
                    your{" "}
                  </span>
                  <a
                    href="javascript:"
                    className="text-indigo-A200 font-plusjakartasans text-left font-extrabold underline"
                  >
                    fav
                  </a>
                  <a
                    href="javascript:"
                    className="text-indigo-A200 font-plusjakartasans text-left font-extrabold underline"
                  >
                    {" "}
                    comic
                  </a>
                  <span className="text-indigo-A200 font-plusjakartasans text-left font-extrabold">
                    {" "}
                  </span>
                  <span className="text-blue_gray-900 font-plusjakartasans text-left font-extrabold">
                    effortlessly
                  </span>
                </Text>
                <Text
                  className="leading-[30.00px] mt-[30px] text-base text-blue_gray-600"
                  size="txtPlusJakartaSansRomanRegular16"
                >
                  <>
                    Embark on a literary journey like never before with our
                    revolutionary <br />
                    library application! Introducing a seamless experience{" "}
                    <br />
                    that transcends traditional boundaries, where you <br />
                    can effortlessly search your favorite comics.✨
                  </>
                </Text>
                <Button
                  className="cursor-pointer font-bold min-w-[200px] mt-[34px] rounded-[10px] text-base text-center"
                  size="sm"
                >
                  Start now →
                </Button>
              </div>
              <div className="flex flex-col items-center justify-start w-[30%] md:w-full">
                <Img
                  className="h-[472px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                  src="images/img_dompetayahsepatu.png"
                  alt="dompetayahsepat"
                />
              </div>
            </div>
            <div className="absolute flex md:flex-col flex-row md:gap-5 items-center justify-start left-[0] top-[10%] w-[91%]">
              <div className="flex flex-row gap-[9px] items-center justify-start w-auto">
                <Img
                  className="h-7 md:h-auto rounded-[50%] w-7"
                  src="images/img_logo.png"
                  alt="logo"
                />
                <Text
                  className="text-black-900 text-lg text-right w-auto"
                  size="txtPlusJakartaSansBold18"
                >
                  Comikal
                </Text>
              </div>
              <div className="flex flex-row gap-10 items-start justify-start md:ml-[0] ml-[125px] w-[329px]">
                <div className="flex flex-col items-center justify-center w-auto">
                  <Text
                    className="capitalize text-indigo-A700 text-sm w-auto"
                    size="txtPlusJakartaSansRegular14"
                  >
                    Feature
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center w-auto">
                  <Text
                    className="capitalize text-gray-500 text-sm w-auto"
                    size="txtPlusJakartaSansRegular14Gray500"
                  >
                    Service
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center w-auto">
                  <Text
                    className="capitalize text-gray-500 text-sm w-auto"
                    size="txtPlusJakartaSansRegular14Gray500"
                  >
                    Review
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center w-auto">
                  <Text
                    className="capitalize text-gray-500 text-sm w-auto"
                    size="txtPlusJakartaSansRegular14Gray500"
                  >
                    Location
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[530px] w-[12%] md:w-full">
                <Button
                  className="common-pointer cursor-pointer font-bold min-w-[137px] rounded-[10px] text-base text-center"
                  onClick={() => navigate("/login")}
                  color="white_A700"
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[170px] w-[91%] md:w-full">
            <div className="flex flex-col md:gap-10 gap-[93px] items-start justify-start w-full">
              <div className="flex flex-col gap-2.5 items-start justify-start">
                <Text
                  className="text-indigo-A200 text-lg tracking-[1.71px]"
                  size="txtPlusJakartaSansExtraBold18"
                >
                  FEATURES
                </Text>
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[0.48px]"
                  size="txtPlusJakartaSansExtraBold48"
                >
                  <span className="text-black-900 font-plusjakartasans text-left font-extrabold">
                    {" "}
                    What You Can D
                  </span>
                  <span className="text-black-900 font-plusjakartasans text-left font-extrabold">
                    o
                  </span>
                  <span className="text-black-900 font-plusjakartasans text-left font-extrabold">
                    ?
                  </span>
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row md:gap-10 gap-[186px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="bg-indigo-A200 flex flex-col h-[102px] items-center justify-start p-7 sm:px-5 rounded-[26px] shadow-bs1 w-[102px]">
                    <Img
                      className="h-[45px] w-[45px]"
                      src="images/img_frame.svg"
                      alt="frame"
                    />
                  </div>
                  <Text
                    className="mt-5 text-2xl md:text-[22px] text-black-900 text-center sm:text-xl tracking-[0.48px]"
                    size="txtPlusJakartaSansRomanBold24"
                  >
                    Search comic
                  </Text>
                  <Text
                    className="leading-[30.00px] mt-[26px] text-base text-blue_gray-600 text-center tracking-[0.32px]"
                    size="txtPlusJakartaSansRomanMedium16"
                  >
                    <>
                      Effortlessly find your next <br />
                      read with our powerful and intuitive <br />
                      comic search.
                    </>
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="bg-indigo-A200 flex flex-col h-[102px] items-center justify-start p-7 sm:px-5 rounded-[26px] shadow-bs1 w-[102px]">
                    <Img
                      className="h-[45px] w-[45px]"
                      src="images/img_contrast.svg"
                      alt="contrast"
                    />
                  </div>
                  <Text
                    className="mt-5 text-2xl md:text-[22px] text-black-900 text-center sm:text-xl tracking-[0.48px]"
                    size="txtPlusJakartaSansRomanBold24"
                  >
                    Review comic
                  </Text>
                  <Text
                    className="leading-[30.00px] mt-[26px] text-base text-blue_gray-600 text-center tracking-[0.32px]"
                    size="txtPlusJakartaSansRomanMedium16"
                  >
                    <>
                      Discover insightful critiques and <br />
                      share your thoughts on diverse <br />
                      literary masterpieces effortlessly.
                    </>
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="bg-indigo-A200 flex flex-col h-[102px] items-center justify-start p-7 sm:px-5 rounded-[26px] shadow-bs1 w-[102px]">
                    <Img
                      className="h-[45px] w-[45px]"
                      src="images/img_favorite.svg"
                      alt="favorite"
                    />
                  </div>
                  <Text
                    className="mt-5 text-2xl md:text-[22px] text-black-900 text-center sm:text-xl tracking-[0.48px]"
                    size="txtPlusJakartaSansRomanBold24"
                  >
                    Wishlist comic
                  </Text>
                  <Text
                    className="leading-[30.00px] mt-[26px] text-base text-blue_gray-600 text-center tracking-[0.32px]"
                    size="txtPlusJakartaSansRomanMedium16"
                  >
                    <>
                      Curate your literary <br />
                      dreams–wishlist comic for future <br />
                      adventures and discoveries.
                    </>
                  </Text>
                </div>
              </List>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start mt-[200px] w-[91%] md:w-full">
            <div className="flex flex-col gap-2.5 items-start justify-start">
              <Text
                className="text-indigo-A200 text-lg tracking-[1.71px]"
                size="txtPlusJakartaSansExtraBold18"
              >
                SERVICES
              </Text>
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[0.48px]"
                size="txtPlusJakartaSansExtraBold48"
              >
                The Services for You
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[93px] w-[95%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[53%] md:w-full">
                <Img
                  className="h-[399px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                  src="images/img_service.png"
                  alt="service_One"
                />
              </div>
              <div className="flex flex-col gap-10 items-start justify-start w-[37%] md:w-full">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[0.64px]"
                    size="txtPlusJakartaSansRomanBold32"
                  >
                    <span className="text-indigo-A200 font-plusjakartasans text-left font-medium">
                      Rent
                    </span>
                    <span className="text-black-900 font-plusjakartasans text-left font-medium">
                      <>
                        {" "}
                        your favorite comic <br />
                        fairly easy on{" "}
                      </>
                    </span>
                    <span className="text-indigo-A200 font-plusjakartasans text-left font-medium">
                      Comikal
                    </span>
                    <span className="text-black-900 font-plusjakartasans text-left font-medium">
                      !
                    </span>
                  </Text>
                </div>
                <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                  <Text
                    className="leading-[30.00px] text-base text-blue_gray-600 tracking-[0.32px]"
                    size="txtPlusJakartaSansRomanMedium16"
                  >
                    <>
                      Viewing, rent, and organize your favorite comics has
                      <br />
                      never been easier. An integrated digital library rent{" "}
                      <br />
                      that’s simple to use, Comikal lets you spend less time{" "}
                      <br />
                      managing your work and more time actually doing it!
                    </>
                  </Text>
                  <Text
                    className="leading-[30.00px] text-base text-blue_gray-600 tracking-[0.32px]"
                    size="txtPlusJakartaSansRomanMedium16"
                  >
                    <>
                      Effortless rentals, personalized shelves—Comikal <br />
                      transforms comic management, enhancing your <br />
                      reading experience~
                    </>
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[140px] w-full">
              <div className="flex md:flex-1 flex-col gap-10 items-center justify-start w-[35%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[0.64px]"
                    size="txtPlusJakartaSansRomanMedium32"
                  >
                    <span className="text-black-900 font-plusjakartasans text-left font-medium">
                      <>
                        Quick Comic Rentals: <br />
                      </>
                    </span>
                    <span className="text-indigo-A200 font-plusjakartasans text-left font-medium">
                      Dive
                    </span>
                    <span className="text-black-900 font-plusjakartasans text-left font-medium">
                      {" "}
                      into{" "}
                    </span>
                    <span className="text-indigo-A200 font-plusjakartasans text-left font-medium">
                      Reading
                    </span>
                    <span className="text-black-900 font-plusjakartasans text-left font-medium">
                      {" "}
                      Instantly
                    </span>
                  </Text>
                </div>
                <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                  <Text
                    className="leading-[30.00px] text-base text-blue_gray-600 tracking-[0.32px]"
                    size="txtPlusJakartaSansRomanMedium16"
                  >
                    <>
                      Discover instant literary delight. Access a vast library,
                      <br />
                      borrow your favorite reads, and dive into captivating
                      <br />
                      stories within minutes. Reading made quick and easy,
                      <br />
                      just a click away!
                    </>
                  </Text>
                  <Text
                    className="leading-[30.00px] text-base text-blue_gray-600 tracking-[0.32px]"
                    size="txtPlusJakartaSansRomanMedium16"
                  >
                    <>
                      Unlock a world of stories effortlessly. <br />
                      Browse genres, choose, rent in minutes. <br />
                      Seamlessly manage your reading adventures <br />
                      with our intuitive platform~
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
                <Img
                  className="h-[399px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                  src="images/img_reading.png"
                  alt="reading"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-[93px] items-start justify-start mt-[200px] w-[91%] md:w-full">
            <div className="flex flex-col gap-2.5 items-start justify-start">
              <Text
                className="text-indigo-A200 text-lg tracking-[1.71px]"
                size="txtPlusJakartaSansExtraBold18"
              >
                REVIEWS
              </Text>
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[0.48px]"
                size="txtPlusJakartaSansExtraBold48"
              >
                Reviews from Customers
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row gap-[51px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-center justify-start p-10 sm:px-5 shadow-bs2 w-full">
                <div className="flex flex-col h-[149px] items-center justify-start w-[149px]">
                  <Img
                    className="h-[149px] md:h-auto rounded-[50%] w-[149px]"
                    src="images/img_cover_149x149.png"
                    alt="cover"
                  />
                </div>
                <Text
                  className="leading-[30.00px] mt-[30px] text-base text-blue_gray-600 text-center tracking-[0.20px]"
                  size="txtPlusJakartaSansRomanMedium16"
                >
                  <>
                    Great selection of comics, <br />with friendly staff who <br />
                    are always helpful.
                  </>
                </Text>
                <Text
                  className="mt-8 text-base text-blue-500 text-center tracking-[0.20px]"
                  size="txtPlusJakartaSansRomanMedium16Blue500"
                >
                  Emily Johnson
                </Text>
                <Text
                  className="mb-[7px] mt-6 text-base text-blue_gray-900 text-center tracking-[0.20px]"
                  size="txtPlusJakartaSansRomanMedium16Bluegray900"
                >
                  Comic Enthusiast
                </Text>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-center justify-start p-10 sm:px-5 shadow-bs2 w-full">
                <div className="flex flex-col h-[149px] items-center justify-start w-[149px]">
                  <Img
                    className="h-[149px] md:h-auto rounded-[50%] w-[149px]"
                    src="images/img_cover_1.png"
                    alt="cover"
                  />
                </div>
                <Text
                  className="leading-[30.00px] mt-[30px] text-base text-blue_gray-600 text-center tracking-[0.20px]"
                  size="txtPlusJakartaSansRomanMedium16"
                >
                  <>
                    This comic store is a hidden gem! <br />
                    Their collection is extensive, <br />
                    and the atmosphere is welcoming.
                  </>
                </Text>
                <Text
                  className="mt-[30px] text-base text-blue-500 text-center tracking-[0.20px]"
                  size="txtPlusJakartaSansRomanMedium16Blue500"
                >
                  David Thompson
                </Text>
                <Text
                  className="mb-[9px] mt-6 text-base text-blue_gray-900 text-center tracking-[0.20px]"
                  size="txtPlusJakartaSansRomanMedium16Bluegray900"
                >
                  Local Resident
                </Text>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-center justify-start p-10 sm:px-5 shadow-bs2 w-full">
                <div className="flex flex-col h-[149px] items-center justify-start w-[149px]">
                  <Img
                    className="h-[149px] md:h-auto object-cover w-[149px]"
                    src="images/img_cover_2.png"
                    alt="cover"
                  />
                </div>
                <Text
                  className="leading-[30.00px] mt-[30px] text-base text-blue_gray-600 text-center tracking-[0.20px]"
                  size="txtPlusJakartaSansRomanMedium16"
                >
                  <>
                    Love this place! <br />
                    The staff recommendations <br />
                    are always on point.
                  </>
                </Text>
                <Text
                  className="mt-8 text-base text-blue-500 text-center tracking-[0.20px]"
                  size="txtPlusJakartaSansRomanMedium16Blue500"
                >
                  Sarah Davis
                </Text>
                <Text
                  className="mb-[7px] mt-[23px] text-base text-blue_gray-900 text-center tracking-[0.20px]"
                  size="txtPlusJakartaSansRomanMedium16Bluegray900"
                >
                  Regular Customer
                </Text>
              </div>
            </List>

          </div>
          <div className="flex flex-col md:gap-10 gap-[90px] items-start justify-start mt-[200px] w-[91%] md:w-full">
            <div className="flex flex-col gap-[13px] items-start justify-start">
              <Text
                className="text-indigo-A200 text-lg tracking-[1.71px]"
                size="txtPlusJakartaSansExtraBold18"
              >
                LOCATION
              </Text>
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[0.48px]"
                size="txtPlusJakartaSansExtraBold48"
              >
                <span className="text-black-900 font-plusjakartasans text-left font-extrabold">
                  {" "}
                  Our Library Location
                </span>
              </Text>
            </div>
            <Img
              className="h-[405px] sm:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
              src="images/img_location.png"
              alt="location_Two"
            />
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col md:gap-10 gap-[94px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:px-5 w-[56%] md:w-full">
                <div className="flex flex-col gap-5 items-center justify-start md:mt-0 mt-0.5 w-[31%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                    size="txtPlusJakartaSansRomanBold24"
                  >
                    Managed By
                  </Text>
                  <Img
                    className="h-[93px] md:h-auto object-cover w-full"
                    src="images/img_logotextblack.png"
                    alt="logotextblack" 
                  />
                </div>
                <div className="flex flex-col gap-[50px] items-center justify-start md:ml-[0] ml-[102px] w-[19%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                    size="txtPlusJakartaSansRomanBold24"
                  >
                    Social Media
                  </Text>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Img
                      className="h-10 w-10"
                      src="images/img_twitter.svg"
                      alt="twitter"
                    />
                    <Img
                      className="h-10 w-10"
                      src="images/img_instagram.svg"
                      alt="instagram"
                    />
                    <Img
                      className="h-10 w-10"
                      src="images/img_facebook.svg"
                      alt="facebook"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[55px] items-center justify-start md:ml-[0] ml-[147px] md:mt-0 mt-0.5">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                    size="txtPlusJakartaSansRomanBold24"
                  >
                    Slogan
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xl"
                    size="txtPlusJakartaSansRomanMedium20"
                  >
                    #RentFavComics
                  </Text>
                </div>
              </div>
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[1440px] md:min-w-full text-center text-sm"
                shape="square"
                size="md"
              >
                © 2024 Comikal. All rights reserved.
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPagePage;
