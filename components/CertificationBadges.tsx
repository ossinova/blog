import { FC } from 'react';
import Image from '@/components/Image';
import { CertificationTypes } from '@/types/certifications';

type CertificationBadgesProps = {
  about: CertificationTypes;
};

const CertificationBadges: FC<CertificationBadgesProps> = ({ about }) => {
  return (
    <div className="certification-grid">
      {about.certifications?.items?.map((item, index) => (
        <div className="certification-item" key={index}>
          <a
            href={item.path}
            target="_blank"
            rel="noreferrer noopener"
            title={item.title}
            aria-label={item.title}
          >
            <Image title={item.title} imageUrl={item.imageUrl} />
          </a>
          <span>{item.issued}</span>
        </div>
      ))}
    </div>
  );
};

export default CertificationBadges;
