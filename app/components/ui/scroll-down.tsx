import Image from "next/image";

export const ScrollDown = () => {
  return (
    <Image
      src="/desktop/scrolldown.gif"
      // fill={true}
      width={1000}
      height={1000}
      quality={100}
      alt="Home page"
      className="h-20 w-20"
    />
  );
};
