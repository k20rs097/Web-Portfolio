const Header = () => {
    return (
      <header className="header">
        <div className="header-container">
          <h1 id="title" className="header-title"><a href="#splash-screen">Web-Portfolio</a></h1>
          <nav className="navbar">
              <ul className="menu-group">
                  <li className="menu-item"><a href="#hero">HOME</a></li>
                  <li className="menu-item"><a href="">経歴</a></li>
                  <li className="menu-item"><a href="">研究室</a></li>
                  <li className="menu-item"><a href="">自主開発</a></li>
              </ul>
          </nav>
        </div>
      </header>
    );
  }

  export default Header;