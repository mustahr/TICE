import Image from "next/image";

export const HomeSectionPic = () => {
  return (
    <div className="relative overflow-hidden">
      <Image
        src="/desktop/red.png"
        // fill={true}
        width={1000}
        height={1000}
        quality={100}
        alt="Home page"
        className="w-[300px] h-auto absolute animate-bounce "
      />
      <Image
        src="/desktop/red-red.png"
        // fill={true}
        width={1000}
        height={1000}
        quality={100}
        alt="Home page"
        className="w-[300px] h-auto absolute right-0 top-36 animate-bounce "
      />
      <Image
        src="/desktop/white.png"
        // fill={true}
        width={1000}
        height={1000}
        quality={100}
        alt="Home page"
        className="w-[300px] h-auto absolute right-0  animate-ping  "
      />
      <Image
        src="/desktop/green.png"
        // fill={true}
        width={1000}
        height={1000}
        quality={100}
        alt="Home page"
        className="w-[300px] h-auto absolute left-0 bottom-0 motion-safe:animate-spin "
      />
      <Image
        src="/desktop/kid.png"
        // fill={true}
        width={1000}
        height={1000}
        quality={100}
        alt="Home page"
        className="min-w-[700px] h-full "
      />
    </div>
  );
};
