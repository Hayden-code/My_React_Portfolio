import profile from "../images/profile.jpeg";

function Header() {
  return (
    <header className="App-header">
      <nav>
        <ul>
          <li>
            <button className="navBtn">
              {" "}
              <a href="#bio">
                {" "}
                <h4> Bio </h4>{" "}
              </a>
            </button>
          </li>
          <li>
            <button className="navBtn">
              <a href="#projects">
                <h4>Projects</h4>
              </a>
            </button>
          </li>
          <li>
            <button className="navBtn">
              <a href="#contact">
                <h4>Contact</h4>
              </a>
            </button>
          </li>
        </ul>
        <img src={profile} alt="head shot of myself" width="90%"></img>
      </nav>
    </header>
  );
}

export default Header;
