import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.navSections}>
        <div className={navStyles.searchBar}>
          <button className={navStyles.searchButton}>
            Search
          </button>
          <input type="text" id="search" placeholder="Search "/>
        </div>
        <ul className={navStyles.links}>
          <li className={navStyles.socialIcon}>
            fb
          </li>
          <li className={navStyles.socialIcon}>
            fb
          </li>
          <li className={navStyles.socialIcon}>
            fb
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
