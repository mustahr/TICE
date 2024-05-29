// components/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  projectUrl,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg text-white mb-6 transform md:even:-translate-y-6 md:odd:translate-y-6">
      <Image
        className="w-full"
        src={imageUrl}
        alt={title}
        width={500}
        height={300}
      />
      <div className=" py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-sm">{description}</p>
      </div>
      <div className=" py-2">
        <Link
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group text-blue-500"
        >
          Visit <span className="group-hover:ml-2 transition-all"> &rarr; </span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
