import { cn } from "@/lib/utils";
import Marquee from "../magicui/marquee";
import Link from "next/link";
import Image from "next/image";

const reviews = [
  {
    name: "Selecting Difficult Layers",
    body: "Use Ctrl to select difficult layers. This shortcut helps you select multiple layers with ease.",
    img: "/canvaTricks/select.png",
    link: "https://www.canva.com/design/DAGH3FqOvJY/wcvEn1IrHKCAyP4Y6nd1Bw/edit?utm_content=DAGH3FqOvJY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    name: "Designing a Beautiful eBook Cover or Product Mockup",
    body: "Learn how to design stunning eBook covers and product mockups to enhance your presentations and marketing materials.",
    img: "/canvaTricks/ebook.png",
    link: "https://www.canva.com/design/DAGH3fEM0Bg/nezRAfvlEHbMUizoRPV85Q/edit?utm_content=DAGH3fEM0Bg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    name: "Zooming In and Out",
    body: "Use Ctrl + Scroll or Ctrl + (+/-) to zoom in and out, making it easier to work on intricate details of your design.",
    img: "/canvaTricks/zoom.png",
    link: "https://www.canva.com/design/DAGH3fEM0Bg/nezRAfvlEHbMUizoRPV85Q/edit?utm_content=DAGH3fEM0Bg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    name: "Adding Hyperlinks to Text",
    body: "Discover how to add hyperlinks to text within your designs to make your documents interactive and functional.",
    img: "/canvaTricks/link.png",
    link: "https://www.canva.com/design/DAGH3FqOvJY/wcvEn1IrHKCAyP4Y6nd1Bw/edit?utm_content=DAGH3FqOvJY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    name: "Positioning Elements",
    body: "Master the art of positioning elements in your designs for a cleaner and more professional look.",
    img: "/canvaTricks/position.png",
    link: "https://www.canva.com/design/DAGH3FqOvJY/wcvEn1IrHKCAyP4Y6nd1Bw/edit?utm_content=DAGH3FqOvJY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    name: "Removing Backgrounds",
    body: "Easily remove backgrounds from images to create clean and professional visuals.",
    img: "/canvaTricks/removebg.png",
    link: "https://www.canva.com/design/DAGH3FqOvJY/wcvEn1IrHKCAyP4Y6nd1Bw/edit?utm_content=DAGH3FqOvJY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    name: "Ink Video Tutorial",
    body: "Watch this video tutorial to learn how to use the ink feature in Canva.",
    img: "/canvaTricks/ink.png",
    link: "https://www.canva.com/design/DAGHmV3Vh-s/ObKh3CISMjc-7nSxhEGWMQ/edit?utm_content=DAGHmV3Vh-s&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    name: "School and Education",
    body: "Explore Canva's features for educational purposes.",
    img: "/canvaTricks/team.png",
    link: "https://www.canva.com/design/DAGH3FqOvJY/wcvEn1IrHKCAyP4Y6nd1Bw/edit?utm_content=DAGH3FqOvJY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  link,
  body,
}: {
  img: string;
  name: string;
  link: string;
  body: string;
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      className={cn(
        "relative mg:w-80 min-w-full cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-pink-300 bg-pink-950/[.01] hover:bg-pink-950/[.05]",
        // dark styles
        "dark:border-pink-500 dark:bg-pink-50/[.10] dark:hover:bg-pink-50/[.15]"
      )}
    >
      <div className="flex flex-row items-start gap-2">
        <Image
          src={img}
          alt={name}
          width={32}
          height={32}
          className="rounded-full object-cover  bg-black p-1 border border-pink-500"
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </Link>
  );
};

const CanvaTricks = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-black py-20 md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
    </div>
  );
};

export default CanvaTricks;
