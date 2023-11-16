// Import React and necessary hooks
import React from 'react';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer } from '@fortawesome/free-solid-svg-icons';

const stylePersonalOuter = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  minWidth: 'fit-content',
  maxWidth: 'min-content',
  marginBottom: '.8rem',
  padding: '.24rem .7rem .2rem .5rem',
  border: '1px solid var(--color-accent-gray)',
  backgroundColor: 'transparent',
  borderRadius: 10,
  h2: {
    color: 'var(--color-gray)',
  },
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

const stylePersonalInner = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  minWidth: 'fit-content',
  maxWidth: 'min-content',
  marginBottom: '.8rem',
  padding: '.24rem .7rem .2rem .5rem',
  border: '1px solid var(--color-accent-gray)',
  backgroundColor: 'transparent',
  borderRadius: 10,
  textAlign: 'center',
  fontSize: 'calc(1.0vw + 1.5vh)',
  fontWeight: 700,
  h2: {
    color: 'var(--color-white)',
  },
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

const styleIcon = css({
  marginRight: '0.5rem', // Space between the icon and the text
});

const PersonalIntroduction: React.FC = () => {
  return (
    <section css={stylePersonalOuter}>
      <p>
        <FontAwesomeIcon icon={faComputer} css={styleIcon} />
      </p>
      <p>
      Sharing my thoughts on data engineering, coding and personal projects.
      </p>
    </section>
  );
};

export default PersonalIntroduction;
