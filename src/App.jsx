import { useEffect } from 'react'
import Layout from './components/Layout'
import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'
import useAnimation from './hooks/useAnimation'

export default function App() {
  const { isDancing, toggle, speed, setSpeed } = useAnimation(true)

  useEffect(() => {
    const onKey = (e) => {
      if (e.code === 'Space' && e.target.tagName !== 'BUTTON' && e.target.tagName !== 'INPUT') {
        e.preventDefault()
        toggle()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [toggle])

  return (
    <Layout>
      <DancingCat isDancing={isDancing} speed={speed} onToggle={toggle} />
      <AnimationControls isDancing={isDancing} onToggle={toggle} speed={speed} onSpeedChange={setSpeed} />
    </Layout>
  )
}
