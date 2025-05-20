import './CertBadge.css';

interface CertBadgeProps {
  label: string;
  level?: 'basic' | 'advanced';
}

const CertBadge: React.FC<CertBadgeProps> = ({ label, level = 'basic' }) => {
  return <span className={`cert-badge ${level}`}>{label}</span>;
};

export default CertBadge;
