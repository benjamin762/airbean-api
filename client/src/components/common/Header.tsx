/* import PropTypes from 'prop-types' */

/**
 * The header component
 * @param {Object} props - component props
 * @param {string} props.title - the title of the header
 * @returns {React.ReactElement} the header component
 */
function Header({ title }: { title: string }) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}

export default Header

