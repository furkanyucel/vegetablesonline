import SearchModal from "../Search/SearchModal"
import "./Header.css"

const Header = () => {
  return (
    <header className="container-fluid">
      <figure className="logo">
        <img src="/images/logo.png" alt="Logo" />
      </figure>

      <nav>
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">SHOP</a></li>
          <li><a href="#">VEGETABLES</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">CONTACT US</a></li>
        </ul>
        
        <div className="search">
          {/* <img src="/images/search-icon.png" alt="Search Icon" /> */}
          <SearchModal />
        </div>
      </nav>

    </header>
  )
}

export default Header