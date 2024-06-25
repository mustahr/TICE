import { cn } from "@/lib/utils";
import Marquee from "../magicui/marquee";
import Link from "next/link";

// Define an array of colors
const colors = [
  "#FFD700",
  "#FF6347",
  "#7FFFD4",
  "#8A2BE2",
  "#FF4500",
  "#1E90FF",
];

const reviews = [
  {
    name: "Commencer par des projets simples",
    body: "Commencez par des tutoriels et des projets de base pour aider les élèves à se familiariser avec l'interface et les concepts de base.",
    link: "https://www.educode.fr/course/projets-scratch-debutants/",
  },
  {
    name: "Encourager l'exploration",
    body: "Permettez aux élèves d'explorer et d'expérimenter avec différents blocs et fonctionnalités par eux-mêmes.",
    link: "https://sip.scratch.mit.edu/2019/01/31/start-with-exploration-not-explanation/",
  },
  {
    name: "Fournir des instructions claires",
    body: "Donnez des instructions étape par étape pour les projets plus complexes afin de garantir que les élèves comprennent chaque partie du processus.",
    link: "https://sip.scratch.mit.edu/2019/01/31/start-with-exploration-not-explanation/",
  },
  {
    name: "Utiliser les ressources disponibles",
    body: "Utilisez les nombreuses ressources disponibles sur le site de Scratch, y compris les tutoriels, les exemples de projets et la communauté éducative.",
    link: "https://sip.scratch.mit.edu",
  },
  {
    name: "Intégrer des problèmes du monde réel",
    body: "Concevez des projets qui abordent des problèmes ou des scénarios du monde réel pour rendre l'apprentissage plus pertinent et engageant.",
    link: "https://sip.scratch.mit.edu",
  },
  {
    name: "Célébrer les réalisations",
    body: "Présentez les projets des élèves en classe ou en ligne pour les motiver et les encourager.",
    link: "https://sip.scratch.mit.edu",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const ReviewCard = ({
  name,
  link,
  body,
}: {
  name: string;
  link: string;
  body: string;
}) => {
  const color = getRandomColor();
  return (
    <Link
      href={link}
      target="_blank"
      className={cn(
        "relative md:w-80 min-w-full min-h-[4OOpx] cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-yellow-300 bg-yellow-950/[.01] hover:bg-yellow-950/[.05]",
        // dark styles
        "dark:border-yellow-500 dark:bg-yellow-50/[.10] dark:hover:bg-yellow-50/[.15]"
      )}
    >
      <div className="flex flex-row items-start gap-2">
        <div
          className="w-8 h-8 rounded-full p-2 border border-yellow-500"
          style={{ backgroundColor: color }}
        ></div>
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

const ScratchTricks = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-black pb-20 md:shadow-xl">
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

export default ScratchTricks;
