import './ProjectCard.css';
import '../common/SkillCard';
import SkillCard from '../common/SkillCard';
import type { TechItem } from '../../data/projects';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  techStack: TechItem[];
  githubUrl?: string;
  youtubeUrl?: string;
  demoUrl?: string;
  paperUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  techStack,
  githubUrl,
  youtubeUrl,
  demoUrl,
  paperUrl,
}) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tech-stack">
            {techStack.map((tech, index) => (
                <SkillCard key={index} label={tech.label} category={tech.category} />
            ))}
        </div>
        <div className="project-links">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-icon-link"
              title="GitHubリポジトリを開く"
            >
              <FaGithub size={20} />
            </a>
          )}
          {youtubeUrl && (
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-icon-link"
              title="デモ動画(YouTube)を開く"
            >
              <FaYoutube size={20} />
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-icon-link"
              title="公開中のデモサイトを開く"
            >
              <FaExternalLinkAlt size={18} />
            </a>
          )}
          {paperUrl && (
            <a
              href={paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-icon-link"
              title="論文・資料を開く"
            >
              <FaFileAlt size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;