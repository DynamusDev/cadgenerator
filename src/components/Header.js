import '../styles/components/header.scss'

export function Header({ title, icon }) {
  return (
    <header className="header">
      <h1 className="header__title">
        {title}
      </h1>
      <img className="header__icon" src={icon} alt="icon" />
    </header>
  )
};