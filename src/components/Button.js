import '../styles/components/button.scss'

export function Button({ onClick, children }) {
  return (
    <button onClick={onClick} className='button'>
      <h1>
        {children}
      </h1>
    </button>
  )
}