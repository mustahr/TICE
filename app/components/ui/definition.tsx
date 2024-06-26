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
            text="Ressources Numériques."
            className="dancing-script text-6xl font-bold mb-4"
          />
          <p className="text-sm mb-4">
            Concevoir des ressources numériques implique la création et le développement de matériaux éducatifs pouvant être utilisés sous forme numérique. Ces ressources peuvent inclure des présentations interactives, des vidéos, des animations, des jeux et d&#39;autres outils numériques qui améliorent l&#39;expérience d&#39;apprentissage.
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
              Voir plus
            </span>
          </Link>
        </div>
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
          <div className="relative py-10 px-5 hover:bg-gray-300/10 transition-all">
            <BorderBeam />
            <h1 className="dancing-script absolute -top-3 left-3 font-bold px-3 py-1 bg-black">
              01
            </h1>
            <h2 className="font-bold text-2xl mb-2">Plateformes Éducatives :</h2>
            <p className="text-sm text-gray-300">
              Sites web et plateformes dédiés à la fourniture de contenu éducatif, tels que Khan Academy, Coursera et TED-Ed.
            </p>
          </div>
          <div className="relative py-10 px-5 hover:bg-gray-300/10 transition-all border">
            <h1 className="dancing-script absolute -top-3 left-3 font-bold px-3 py-1 bg-black">
              02
            </h1>
            <h2 className="font-bold text-2xl mb-2">
              Ressources Éducatives Libres (OER) :
            </h2>
            <p className="text-sm text-gray-300">
              Matériaux éducatifs gratuits et sous licence ouverte pouvant être utilisés pour l&#39;enseignement, l&#39;apprentissage, la recherche et d&#39;autres fins.
            </p>
          </div>
          <div className="relative py-10 px-5 hover:bg-gray-300/10 transition-all border">
            <h1 className="dancing-script absolute -top-3 left-3 font-bold px-3 py-1 bg-black">
              03
            </h1>
            <h2 className="font-bold text-2xl mb-2">Bibliothèques Numériques</h2>
            <p className="text-sm text-gray-300">
              Collections en ligne de ressources, telles que les collections numériques de la Bibliothèque du Congrès ou Europeana, qui offrent un accès à une multitude de matériaux éducatifs.
            </p>
          </div>
          <div className="relative py-10 px-5 hover:bg-gray-300/10 transition-all">
            <BorderBeam />
            <h1 className="dancing-script absolute -top-3 left-3 font-bold px-3 py-1 bg-black">
              04
            </h1>
            <h2 className="font-bold text-2xl mb-2">
              Médias Sociaux et Communautés en Ligne :
            </h2>
            <p className="text-sm text-gray-300">
              Plateformes comme Twitter, Facebook et LinkedIn, ainsi que des forums en ligne et des communautés dédiées à l&#39;éducation, où les éducateurs peuvent partager des ressources et des idées.
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