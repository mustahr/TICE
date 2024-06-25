import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Item {
  id: number;
  title: string;
  content: string;
}

const items: Item[] = [
  {
    id: 1,
    title: "Introduction aux concepts de programmation",
    content: `
        Apprentissage interactif : Scratch introduit des concepts de programmation tels que les boucles, les conditions, les variables et les événements à travers des projets interactifs.
        <br/>Rétroaction visuelle : La nature visuelle de Scratch fournit une rétroaction immédiate, permettant aux élèves de voir les résultats de leur code en temps réel.
      `,
  },
  {
    id: 2,
    title: "Amélioration de la créativité et de la résolution de problèmes",
    content: `
        Apprentissage par projet : Les élèves peuvent créer leurs propres projets, tels que des jeux, des histoires et des animations, favorisant la créativité et les compétences en résolution de problèmes.
        <br/>Expérimentation : Scratch encourage l'expérimentation, permettant aux élèves d'essayer différentes approches et d'apprendre de leurs erreurs.
      `,
  },
  {
    id: 3,
    title: "Apprentissage collaboratif",
    content: `
        Communauté Scratch : La communauté en ligne de Scratch permet aux élèves de partager leurs projets, de recevoir des commentaires et de collaborer avec d'autres personnes dans le monde entier.
        <br/>Projets de groupe : Les enseignants peuvent assigner des projets de groupe pour améliorer le travail d'équipe et les compétences collaboratives.
      `,
  },
  {
    id: 4,
    title: "Applications interdisciplinaires",
    content: `
        Intégration avec d'autres matières : Scratch peut être intégré à d'autres matières comme les mathématiques, les sciences, l'art et la musique pour créer des expériences d'apprentissage interdisciplinaires.
        <br/>Narration : Les élèves peuvent utiliser Scratch pour créer des histoires interactives, améliorant ainsi leurs compétences en narration et en communication.
      `,
  },
];

const DetailList = () => {
  const [activeItemId, setActiveItemId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setActiveItemId((prevId) => (prevId === id ? null : id));
  };
  const PlusIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-5 h-5 ml-2 inline"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4v16m8-8H4"
      />
    </svg>
  );

  return (
    <div className="container mx-auto p-4">
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="border-t-transparent border-l-transparent border-r-transparent border-b rounded-lg overflow-hidden shadow"
          >
            <button
              className="flex justify-between items-center w-full text-left p-4 transition-colors text-white"
              onClick={() => toggleItem(item.id)}
            >
              <h2 className="text-xl font-semibold">
                {item.id}- {item.title}
              </h2>
              <PlusIcon />
            </button>
            <AnimatePresence>
              {activeItemId === item.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="p-4 "
                >
                  <div
                    className="whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetailList;
