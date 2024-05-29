import Link from "next/link";
import { Header } from "./header";
import { BorderBeam } from "../magicui/border-beam";
import ProjectCards from "./ProjectCards";

export default function Definition() {
  return (
    <>
      <div
        className="relative py-10 flex justify-between items-start flex-col md:flex-row"
        id="definition"
      >
        <div className="md:sticky top-24 w-full md:w-1/2 pr-10 mb-8 md:mb-0 space-y-8">
          <Header
            text="Digital Resources."
            className="dancing-script text-6xl font-bold mb-4"
          />
          <p className="text-sm mb-4">
            Designing digital resources involves creating and developing
            educational materials that can be used in digital formats. These
            resources can include interactive presentations, videos, animations,
            games, and other digital tools that enhance the learning experience.
          </p>
          <Link
            href="https://studysmarter.co.uk/explanations/english/research-and-composition/digital-resources/"
            target="_blank"
            className="group relative flex items-center justify-center duration-300 rounded-full hover:bg-white hover:text-black w-fit p-3 transition-all"
          >
            <BorderBeam duration={1} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12l4 4L19 7"
              />
            </svg>
            <span className="absolute left-full text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:ml-2 whitespace-nowrap">
              See more
            </span>
          </Link>
        </div>
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
          <div className="relative py-10 px-5 hover:bg-gray-300/10 transition-all">
            <BorderBeam />
            <h1 className="dancing-script absolute -top-3 left-3 font-bold px-3 py-1 bg-black">
              01
            </h1>
            <h2 className="font-bold text-2xl mb-2">Educational Platforms:</h2>
            <p className="text-sm text-gray-300">
              Websites and platforms dedicated to providing educational content,
              such as Khan Academy, Coursera, and TED-Ed.
            </p>
          </div>
          <div className="relative py-10 px-5 hover:bg-gray-300/10 transition-all border">
            <h1 className="dancing-script absolute -top-3 left-3 font-bold px-3 py-1 bg-black">
              02
            </h1>
            <h2 className="font-bold text-2xl mb-2">
              Open Educational Resources (OER):
            </h2>
            <p className="text-sm text-gray-300">
              Free, openly licensed educational materials that can be used for
              teaching, learning, research, and other purposes.
            </p>
          </div>
          <div className="relative py-10 px-5 hover:bg-gray-300/10 transition-all border">
            <h1 className="dancing-script absolute -top-3 left-3 font-bold px-3 py-1 bg-black">
              03
            </h1>
            <h2 className="font-bold text-2xl mb-2">Digital Libraries</h2>
            <p className="text-sm text-gray-300">
              Online collections of resources, such as the Library of Congress
              Digital Collections or Europeana, which provide access to a wealth
              of educational materials.
            </p>
          </div>
          <div className="relative py-10 px-5 hover:bg-gray-300/10 transition-all">
            <BorderBeam />
            <h1 className="dancing-script absolute -top-3 left-3 font-bold px-3 py-1 bg-black">
              04
            </h1>
            <h2 className="font-bold text-2xl mb-2">
              Social Media and Online Communities:
            </h2>
            <p className="text-sm text-gray-300">
              Platforms like Twitter, Facebook, and LinkedIn, as well as online
              forums and communities dedicated to education, where educators can
              share resources and ideas.
            </p>
          </div>
          <div className="hidden md:block h-40"></div>
        </div>
        <div className="hidden md:block absolute bottom-0 left-0 w-1/2 h-80 bg-gradient-to-b from-transparent to-black"></div>
      </div>
      {/* websites */}
      <ProjectCards />
    </>
  );
}
