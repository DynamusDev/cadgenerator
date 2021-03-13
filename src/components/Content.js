import '../styles/components/content.scss'

export function Content({ children }) {
  return (
    <div className="content">
      {children}
    </div>
  )
}