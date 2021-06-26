import React, { useEffect, useState } from 'react'

const ProgressBar = ({ target }) => {
  const [scrolledProgress, setScrolledProgress] = useState(0)

  const onScrollListener = () => {
    const element = target.current
    const totalHeight = element.clientHeight - element.offsetTop - window.innerHeight
    const windowScrollTop = window.pageYOffset 
                          || document.documentElement.scrollTop
                          || document.body.scrollTop
                          || 0

    const progressStatus = Math.max(windowScrollTop, 0) - Math.max(windowScrollTop - totalHeight, 0)
    setScrolledProgress(progressStatus / totalHeight * 100)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScrollListener)
    return () => window.removeEventListener('scroll', onScrollListener)
  })

  return <div className="sticky block top-0 h-1 md:1.5 z-50 overflow-hidden bg-red-500" style={{ width: `${scrolledProgress}%` }}/>
}

export default ProgressBar