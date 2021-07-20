import project1 from "../images/signupPage.png";
import project2 from "../images/screenshot_of_project_2.png";

function Projects() {
  return (
    <div class="contentBubble" id="projects">
      <h2>PROJECTS</h2>
      <h3>Four recent projects I've been working on. Enjoy!</h3>
      <p>Hover of photo to enhance, click to go to GitHub repository.</p>
      <div class="projectContainer">
        <div class="project">
          <h3>AFL Website</h3>

          <div class="comingSoon">
            <img
              src={project1}
              alt="AFL website screenshot"
              width="100%"
              height="100%"
              onclick="location.href='http://github.com/Hayden-code/AFLWebsite'"
            ></img>
          </div>
          <p>
            Creating a website for AFL fans with features including: weekly
            matches, weather info, basic rules, news and team specific stats.
            Languages used: HTML, CSS, Javascript. Squiggle API used.
          </p>
        </div>

        <div class="project">
          <h3>eTrade Website</h3>

          <div class="comingSoon">
            <img
              src={project2}
              alt="eTrade screenshot"
              width="100%"
              height="100%"
              onclick="location.href='https://github.com/Hayden-code/eTrade-Project2'"
            ></img>
          </div>

          <p>
            A mock-up of an eCommerce website using MVC architecture, created by
            four full stack Web Developers.
          </p>
        </div>

        <div class="project">
          <h3>Project 3</h3>

          <div class="comingSoon">Coming Soon!</div>
          <p>Description of Project</p>
          <p>Description of Project</p>
        </div>

        <article class="project">
          <h3>Project 4</h3>

          <div class="comingSoon">Coming Soon!</div>
          <p>Description of Project</p>
          <p>Description of Project</p>
        </article>
      </div>
      <div id="repos">
        <button class="repoBtn" onclick="getRepos()">
          <h2>Show More Repositories!</h2>
        </button>
        <button class="repoBtn" onclick="hideRepos()">
          <h2>Hide Repositories!</h2>
        </button>
        <div id="extraReposContainer"></div>
      </div>
    </div>
  );
}

export default Projects;
