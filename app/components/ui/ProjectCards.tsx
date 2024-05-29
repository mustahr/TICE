import { Header } from "./header";
import ProjectCard from "./ProjectCard";
import DotPattern from "../magicui/dot-pattern";

import { cn } from "@/lib/utils";

export default function ProjectCards() {
  const projects = [
    {
      title: "Khan Acadimie",
      description:
        "Khan Academy is a non-profit educational organization that provides free.",
      imageUrl: "/RN-Pic/khan.png",
      projectUrl: "https://fr.khanacademy.org/",
    },
    {
      title: "The Library of Congress",
      description:
        "The Library of Congress Digital Collections offer a vast range of resources, including photographs, motion pictures, books, and more.",
      imageUrl: "/RN-Pic/library.png",
      projectUrl:
        "https://www.loc.gov/research-centers/law-library-of-congress/collections/digital-collections/",
    },
    {
      title: "British Library ",
      description:
        "The collections cover numerous subjects and historical periods, providing valuable resources for education and research.",
      imageUrl: "/RN-Pic/history.png",
      projectUrl:
        "https://asianlegacylibrary.org/about-asian-legacy-library/history/?gad_source=1&gclid=Cj0KCQjwsPCyBhD4ARIsAPaaRf2uaYBxxxfo_zOinpSW9xxYyuZH1Cf4BolbWohwAcwctSqBM7IIseIaAgawEALw_wcB",
    },
    {
      title: "Whatsapp",
      description:
        "Users can send and receive messages, photos, videos, and documents.",
      imageUrl: "/RN-Pic/whatsap.png",
      projectUrl: "https://web.whatsapp.com/",
    },
    {
      title: "OverLeaf",
      description:
        "Overleaf is an online collaborative platform for writing, editing, and publishing scientific documents using LaTeX. ",
      imageUrl: "/RN-Pic/overleaf.png",
      projectUrl: "https://fr.overleaf.com/",
    },
    {
      title: "RN-musta",
      description:
        "Online platform where you can find the latest techs to use in your daily work life. ",
      imageUrl: "/RN-Pic/tice.png",
      projectUrl: "https://www.rn-musta.com/",
    },
  ];
  return (
    <>
      {/* websites */}
      <div className="relative w-full min-h-screen bg-black text-white">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] w-full h-full"
          )}
        />
        <div className="container mx-auto px-4 py-8">
          <Header className="text-4xl font-bold mb-8" text="RN: exapmles" />
          <div className="flex flex-wrap items-start justify-center gap-10 pt-10">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
