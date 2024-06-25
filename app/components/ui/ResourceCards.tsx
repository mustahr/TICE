// components/ResourceCards.tsx

import Image from "next/image";
import Link from "next/link";
import PlusIcon from "./PlusIcon";

const resources = [
  {
    title: "Site Web de Scratch",
    description:
      "Le site officiel de Scratch offre une mine de ressources, y compris des tutoriels, des forums et des galeries de projets.",
    img: "/RN-Pic/scratch.png",
    link: "https://scratch.mit.edu/",
  },
  {
    title: "ScratchEd",
    description:
      "Une communauté pour les éducateurs utilisant Scratch dans leurs classes, fournissant des ressources, des plans de cours et des forums de discussion.",
    img: "/RN-Pic/ScratchEd.png",
    link: "https://scratched.gse.harvard.edu/",
  },
  {
    title: "Livres et guides",
    description:
      "Il existe de nombreux livres et guides en ligne qui fournissent des instructions détaillées et des idées de projets pour utiliser Scratch en éducation.",
    img: "/RN-Pic/livre.png",
    link: "https://www.example.com/scratch-books", // Placeholder link
  },
];

const ResourceCard = ({
  title,
  description,
  img,
  link,
}: {
  title: string;
  description: string;
  img: string;
  link: string;
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="relative rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:opacity-80 hover:border"
    >
      <Image
        className="w-full"
        src={img}
        alt={title}
        width={400}
        height={250}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 dark:text-white">{title}</div>
        <p className="text-gray-700 text-base dark:text-gray-300">
          {description}
        </p>
      </div>
      <div className="absolute bottom-2 right-2 flex items-center justify-center">
        <div className="bg-black rounded-full p-3 h-5 w-5 dark:bg-black" />
      </div>
    </Link>
  );
};

const ResourceCards = () => {
  return (
    <div className="relative grid gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {resources.map((resource) => (
        <ResourceCard key={resource.title} {...resource} />
      ))}
    </div>
  );
};

export default ResourceCards;
