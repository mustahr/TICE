import Image from "next/image";
import Link from "next/link";

type ImageCardProps = {
  imgSrc: string;
  altText: string;
  text: string;
  link?: string;
};

const images = [
  {
    imgSrc: "/scratchProject/1.png",
    altText: "Image 1",
    text: "Histoires animées : Les élèves créent des histoires interactives avec des personnages, des dialogues et des animations.",
    link: "https://scratch.mit.edu/explore/projects/stories/",
  },
  {
    imgSrc: "/scratchProject/2.png",
    altText: "Image 2",
    text: "Jeux simples : Conception de jeux de base comme des jeux de labyrinthe, de pong ou des quiz pour comprendre les mécanismes de jeu et la logique.",
    link: "https://scratch.mit.edu/search/projects?q=games",
  },
  {
    imgSrc: "/scratchProject/3.png",
    altText: "Image 3",
    text: "Simulations mathématiques : Création de simulations pour visualiser des concepts mathématiques comme les fractions, la multiplication ou la géométrie.",
    link: "https://scratch.mit.edu/search/projects?q=math",
  },
  {
    imgSrc: "/scratchProject/4.png",
    altText: "Image 4",
    text: "Expériences scientifiques : Modélisation de phénomènes scientifiques tels que le cycle de l'eau, la croissance des plantes ou des expériences de physique simples.",
    link: "https://scratch.mit.edu/search/projects?q=science",
  },
];

const ImageCard = ({ imgSrc, altText, text, link }: ImageCardProps) => {
  const cardContent = (
    <div
      className="rounded overflow-hidden shadow-lg"
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "300px",
        height: "300px",
        position: "relative",
      }}
    >
      <p
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "#fff",
          padding: "8px",
        }}
      >
        {text}
      </p>
    </div>
  );

  return link ? <Link href={link} target="_blank">{cardContent}</Link> : cardContent;
};

const ScratchProject = () => {
  return (
    <>
      <div className="max-w-full flex flex-row gap-8 p-4 items-center justify-center py-12">
        <div className="flex items-center justify-center">
          <ImageCard {...images[0]} />
        </div>
        <div className="flex flex-col gap-2 justify-between h-full max-h-full space-y-8">
          <div className=" flex items-center justify-center">
            <ImageCard {...images[1]} />
          </div>
          <div className=" flex items-center justify-center">
            <ImageCard {...images[2]} />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <ImageCard {...images[3]} />
        </div>
      </div>
    </>
  );
};

export default ScratchProject;
