// components/ScrollProgressBar.tsx
'use client'

import React from 'react'
import useScrollProgress from '../hooks/useScrollProgress'

const ScrollProgressBar: React.FC = () => {
  const progress = useScrollProgress()

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <style jsx>{`
        .progress-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          z-index: 9999; // So it stays above everything else
        }
        .progress-bar {
          height: 3px;
          background-color: #6ee7b7;
          transition: width 0.1s;
        }
      `}</style>
    </div>
  )
}

export default ScrollProgressBar
