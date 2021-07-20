import profile from "../images/profile.jpeg";

function Header() {
  return (
    <header className="App-header">
      <div>
        <h1 id="welcome"> Welcome to My Portfolio Website </h1>

        <ul className="navbar">
          <li>
            <button className="navBtn">
              <h4> Bio </h4>
            </button>
          </li>
          <li>
            <button className="navBtn">
              <h4>Projects</h4>
            </button>
          </li>
          <li>
            <button className="navBtn">
              <h4>Contact</h4>
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
