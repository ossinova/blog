// hooks/useScrollProgress.tsx

'use client'

import { useState, useEffect } from 'react'

function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = window.scrollY / totalHeight
      setProgress(scrolled * 100)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return progress
}

export default useScrollProgress
