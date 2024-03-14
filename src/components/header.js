const Header = () => {
    return (
      <header className="header">
        <div className="header-container">
          <h1 id="title" className="header-title"><a href="#splash-screen">Web-Portfolio</a></h1>
          <nav className="navbar">
              <ul className="menu-group">
                  <li className="menu-item"><a href="#hero">HOME</a></li>
                  <li className="menu-item"><a href="">PROFILE</a></li>
                  <li className="menu-item"><a href="">SEMINAR</a></li>
                  <li className="menu-item"><a href="">WORKS</a></li>
              </ul>
          </nav>
        </div>
      </header>
    );
  }

  export default Header;