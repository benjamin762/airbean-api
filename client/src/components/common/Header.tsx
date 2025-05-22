import { useState } from 'react'

/**
 * The header component
 * @param {Object} props - component props
 * @returns {React.ReactElement} the header component
 */
function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header>
      <button onClick={handleClick} className="hamburger">
        {isOpen ? (
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="5" y1="5" x2="25" y2="25" stroke="#000" strokeWidth="2" />
            <line x1="5" y1="25" x2="25" y2="5" stroke="#000" strokeWidth="2" />
          </svg>
        ) : (
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="6" width="30" height="2" rx="0.5" fill="#000" />
            <rect y="14" width="30" height="2" rx="0.5" fill="#000" />
            <rect y="23" width="30" height="2" rx="0.5" fill="#000" />
          </svg>
        )}
      </button>
      <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/orders">My Orders</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header


