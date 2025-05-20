import './SkillCard.css';

export interface SkillCardProps {
  label: string;
  category?: 'backend' | 'frontend' | 'infra' | 'ml' | 'database' | 'automation' | 'basic';
}

const SkillCard: React.FC<SkillCardProps> = ({ label, category = 'basic' }) => {
    return <span className={`cert-badge ${category}`}>{label}</span>;
  };
  

export default SkillCard;