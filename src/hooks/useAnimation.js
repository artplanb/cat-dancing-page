import { useState, useCallback } from 'react'

export default function useAnimation(initial = true) {
  const [isDancing, setIsDancing] = useState(initial)
  const [speed, setSpeed] = useState(1)
  const toggle = useCallback(() => setIsDancing((v) => !v), [])
  return { isDancing, toggle, speed, setSpeed }
}
