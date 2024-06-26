import { Header } from "./header";
import ProjectCard from "./ProjectCard";
import DotPattern from "../magicui/dot-pattern";

import { cn } from "@/lib/utils";

export default function ProjectCards() {
  const projects = [
    {
      title: "Khan Academy",
      description:
        "Khan Academy est une organisation éducative à but non-profit qui propose gratuitement des cours en ligne dans divers domaines.",
      imageUrl: "/RN-Pic/khan.png",
      projectUrl: "https://fr.khanacademy.org/",
    },
    {
      title: "La Bibliothèque du Congrès",
      description:
        "Les collections numériques de la Bibliothèque du Congrès offrent une vaste gamme de ressources, notamment des photographies, des films, des livres, et bien plus encore.",
      imageUrl: "/RN-Pic/library.png",
      projectUrl:
        "https://www.loc.gov/research-centers/law-library-of-congress/collections/digital-collections/",
    },
    {
      title: "British Library",
      description:
        "Les collections couvrent de nombreux sujets et périodes historiques, fournissant des ressources précieuses pour l'éducation et la recherche.",
      imageUrl: "/RN-Pic/history.png",
      projectUrl:
        "https://asianlegacylibrary.org/about-asian-legacy-library/history/?gad_source=1&gclid=Cj0KCQjwsPCyBhD4ARIsAPaaRf2uaYBxxxfo_zOinpSW9xxYyuZH1Cf4BolbWohwAcwctSqBM7IIseIaAgawEALw_wcB",
    },
    {
      title: "WhatsApp",
      description:
        "Les utilisateurs peuvent envoyer et recevoir des messages, des photos, des vidéos et des documents.",
      imageUrl: "/RN-Pic/whatsap.png",
      projectUrl: "https://web.whatsap.com/",
    },
    {
      title: "Overleaf",
      description:
        "Overleaf est une plateforme collaborative en ligne pour écrire, éditer et publier des documents scientifiques en utilisant LaTeX.",
      imageUrl: "/RN-Pic/overleaf.png",
      projectUrl: "https://fr.overleaf.com/",
    },
    {
      title: "RN-musta",
      description:
        "Plateforme en ligne où vous pouvez trouver les dernières technologies à utiliser dans votre vie professionnelle quotidienne.",
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
          <Header className="text-4xl font-bold mb-8" text="RN: exemples" />
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
