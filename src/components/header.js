import profile from "../images/profile.jpeg";

function Header() {
  return (
    <header className="App-header">
      <div>
        <h1 id="welcome"> Welcome to My Portfolio Website </h1>

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
          <li>
            <img src={profile} alt="portrait shot of myself" width="90%"></img>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
