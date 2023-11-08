/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

// Quote Component Styles
const quoteStyles = css({
  fontStyle: 'italic',
  position: 'relative',
  margin: '2rem 0',
  padding: '0 4rem', // Padding on sides for the quote marks
  '&::before': {
    content: '"“"', // Unicode for Left Double Quotation Mark
    position: 'absolute',
    top: 0,
    left: '10px', // Position the quote towards the left inside the padding area
    fontSize: '4rem',
    lineHeight: '1',
    color: '#ccc',
  },
  '&::after': {
    content: '"”"', // Unicode for Right Double Quotation Mark
    position: 'absolute',
    right: '10px', // Position the quote towards the right inside the padding area
    bottom: 0,
    fontSize: '4rem',
    lineHeight: '1',
    color: '#ccc',
  },
  '& p': {
    position: 'relative',
    zIndex: 1, // Ensure the text is above the pseudo elements
  },
});

// Quote Component
export const Quote = ({ children }) => (
  <blockquote css={quoteStyles}>
    <p>{children}</p>
  </blockquote>
);

// Accordion Component Styles
const accordionStyles = css({
  '.accordion': {
    background: '#f7f7f7',
    borderRadius: '4px',
    padding: '0.5rem 1rem',
    marginBottom: '1rem',
    border: '1px solid #ddd',
    cursor: 'pointer',
    '&:hover': {
      background: '#f0f0f0',
    },
  },
  '.content': {
    overflow: 'hidden',
    transition: 'max-height 0.3s ease',
    maxHeight: 0,
    '&.expanded': {
      maxHeight: '1000px', // Arbitrary large height
      padding: '1rem',
      border: '1px solid #ddd',
    },
  },
});

// Accordion Component
export const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div css={accordionStyles}>
      <div className="accordion" onClick={() => setOpen(!isOpen)}>
        {title}
      </div>
      <div className={`content ${isOpen ? 'expanded' : ''}`}>
        {isOpen && children}
      </div>
    </div>
  );
};

// Callout Component Styles
const calloutStyles = (type) => css({
  padding: '1rem',
  borderRadius: '5px',
  margin: '1rem 0',
  borderLeft: '4px solid',
  borderColor: {
    info: '#5294e2',
    warning: '#f1c40f',
    success: '#2ecc71',
    error: '#e74c3c',
  }[type],
  backgroundColor: {
    info: '#ecf5fe',
    warning: '#fef9ea',
    success: '#eafaf1',
    error: '#fdeded',
  }[type],
  '& strong': {
    display: 'block',
    marginBottom: '0.5rem',
  },
  '&::before': {
    content: {
      info: '"ℹ️"',
      warning: '"⚠️"',
      success: '"✅"',
      error: '"❌"',
    }[type],
    display: 'inline-block',
    marginRight: '0.5rem',
  },
});

// Callout Component
export const Callout = ({ type, title, children }) => (
  <div css={calloutStyles(type)}>
    <strong>{title}</strong>
    {children}
  </div>
);
