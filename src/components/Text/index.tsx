import React from "react";

const sizeClasses = {
  txtPlusJakartaSansRomanBold24: "font-bold font-plusjakartasans",
  txtPlusJakartaSansRomanMedium16: "font-medium font-plusjakartasans",
  txtPlusJakartaSansExtraBold18: "font-extrabold font-plusjakartasans",
  txtPlusJakartaSansRomanRegular16IndigoA700:
    "font-normal font-plusjakartasans",
  txtPlusJakartaSansRomanBold16: "font-bold font-plusjakartasans",
  txtPlusJakartaSansRomanMedium20: "font-medium font-plusjakartasans",
  txtPlusJakartaSansRomanMedium32: "font-medium font-plusjakartasans",
  txtPlusJakartaSansRomanBold20: "font-bold font-plusjakartasans",
  txtPlusJakartaSansRegular14: "font-normal font-plusjakartasans",
  txtPlusJakartaSansRomanBold32: "font-bold font-plusjakartasans",
  txtPlusJakartaSansRomanRegular14: "font-normal font-plusjakartasans",
  txtPlusJakartaSansRegular14Gray500: "font-normal font-plusjakartasans",
  txtPlusJakartaSansRomanRegular16: "font-normal font-plusjakartasans",
  txtPlusJakartaSansBold18: "font-bold font-plusjakartasans",
  txtPlusJakartaSansExtraBold76: "font-extrabold font-plusjakartasans",
  txtPlusJakartaSansRomanMedium16Blue500: "font-medium font-plusjakartasans",
  txtPlusJakartaSansExtraBold48: "font-extrabold font-plusjakartasans",
  txtPlusJakartaSansRomanMedium16Bluegray900:
    "font-medium font-plusjakartasans",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
