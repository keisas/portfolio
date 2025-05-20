import './ProjectCard.css';
import '../common/SkillCard';
import SkillCard from '../common/SkillCard';
import type { TechItem } from '../../data/projects';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  techStack: TechItem[];
  githubUrl?: string;
  demoUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  techStack,
  githubUrl,
  demoUrl,
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
              title="GitHub"
            >
              <FaGithub size={20} />
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-icon-link"
              title="Demo"
            >
              <FaExternalLinkAlt size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;