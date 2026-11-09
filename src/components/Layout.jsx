export default function Layout({ children }) {
  return (
    <main className="layout">
      <h1 className="title">🎵 춤추는 고양이 🎵</h1>
      {children}
      <p className="hint">고양이를 클릭하거나 스페이스바로 춤을 멈춰보세요</p>
    </main>
  )
}
