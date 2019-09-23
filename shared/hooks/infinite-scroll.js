import { useState, useEffect } from 'react'

const useInfiniteScroll = cb => {
  const [isLoading, setIsLoading] = useState(false)

  const handleScroll = () => {
    if (
      document.documentElement.scrollTop !==
        document.documentElement.scrollHeight - window.innerHeight ||
      isLoading
    )
      return
    setIsLoading(true)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isLoading) return
    cb()
  }, [isLoading])

  return [isLoading, setIsLoading]
}

export default useInfiniteScroll
