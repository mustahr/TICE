import { cn } from "@/lib/utils";
import Marquee from "../magicui/marquee";
import Link from "next/link";
import Image from "next/image";

const reviews = [
  {
    name: "Sélection de Couches Difficiles",
    body: "Utilisez Ctrl pour sélectionner des couches difficiles. Ce raccourci vous aide à sélectionner plusieurs couches facilement.",
    img: "/canvaTricks/select.png",
    link: "https://www.canva.com/design/DAGH3FqOvJY/wcvEn1IrHKCAyP4Y6nd1Bw/edit?utm_content=DAGH3FqOvJY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    name: "Conception d'une Belle Couverture d'eBook ou Maquette de Produit",
    body: "Apprenez à concevoir de magnifiques couvertures d'eBooks et maquettes de produits pour améliorer vos présentations et supports marketing.",
    img: "/canvaTricks/ebook.png",
    link: "https://www.canva.com/design/DAGH3fEM0Bg/nezRAfvlEHbMUizoRPV85Q/edit?utm_content=DAGH3fEM0Bg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    name: "Zoom Avant et Arrière",
    body: "Utilisez Ctrl + Défilement ou Ctrl + (+/-) pour zoomer avant et arrière, ce qui facilite le travail sur les détails complexes de votre design.",
    img: "/canvaTricks/zoom.png",
    link: "https://www.canva.com/design/DAGH3fEM0Bg/nezRAfvlEHbMUizoRPV85Q/edit?utm_content=DAGH3fEM0Bg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    name: "Ajout d'Hyperliens au Texte",
    body: "Découvrez comment ajouter des hyperliens au texte dans vos designs pour rendre vos documents interactifs et fonctionnels.",
    img: "/canvaTricks/link.png",
    link: "https://www.canva.com/design/DAGH3FqOvJY/wcvEn1IrHKCAyP4Y6nd1Bw/edit?utm_content=DAGH3FqOvJY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    name: "Positionnement des Éléments",
    body: "Maîtrisez l'art du positionnement des éléments dans vos designs pour un aspect plus propre et professionnel.",
    img: "/canvaTricks/position.png",
    link: "https://www.canva.com/help/keyboard-shortcuts/",
  },
  {
    name: "Suppression des Arrière-plans",
    body: "Supprimez facilement les arrière-plans des images pour créer des visuels propres et professionnels.",
    img: "/canvaTricks/removebg.png",
    link: "https://www.canva.com/design/DAGH3FqOvJY/wcvEn1IrHKCAyP4Y6nd1Bw/edit?utm_content=DAGH3FqOvJY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    name: "Tutoriel Vidéo sur l'Encre",
    body: "Regardez ce tutoriel vidéo pour apprendre à utiliser la fonction encre dans Canva.",
    img: "/canvaTricks/ink.png",
    link: "https://www.canva.com/design/DAGHmV3Vh-s/ObKh3CISMjc-7nSxhEGWMQ/edit?utm_content=DAGHmV3Vh-s&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    name: "École et Éducation",
    body: "Explorez les fonctionnalités de Canva pour des fins éducatives.",
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
        "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-4",
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
