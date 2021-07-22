import project1 from "../images/signupPage.png";
import project2 from "../images/screenshot_of_project_2.png";
import project3 from "../images/tech_blog_screenshot.png";

function Projects() {
  // var buttonClicked = false;
  // var repoContainer = document.getElementById("extraReposContainer");
  // function getRepos() {
  //   var apiUrl = "https://api.github.com/users/hayden-code/repos";
  //   if (buttonClicked) {
  //     // repoContainer.style.display = "block";
  //     console.log("it worked");
  //   } else {
  //     fetch(apiUrl)
  //       .then(function (response) {
  //         if (response.ok) {
  //           response.json().then(function (data) {
  //             displayRepos(data);
  //           });
  //         } else {
  //           alert("Error: " + response.statusText);
  //         }
  //       })
  //       .catch(function (error) {
  //         alert("Unable to get Repos");
  //         console.log(error);
  //       });
  //   }
  // }

  // // function for appending fetched data to index.html
  // function displayRepos(repoData) {
  //   for (var i = 0; i < repoData.length; i++) {
  //     // creating div
  //     var repoEl = document.createElement("div");
  //     repoEl.classList.add("repoLi");

  //     // getting repo title and appending it to repoEl div in a <h2> tag
  //     var repoName = repoData[i].name;
  //     var title = document.createElement("h2");
  //     title.textContent = repoName;
  //     repoEl.appendChild(title);

  //     // getting repo description and appending it to repoEl in a <p> tag
  //     var repoDesc = repoData[i].description;
  //     var repoDescription = document.createElement("p");
  //     repoDescription.textContent = repoDesc;
  //     repoEl.appendChild(repoDescription);

  //     // getting github and website link and appending them to repoEl in an <a> tag
  //     var gitHubLink = repoData[i].html_url;
  //     var a = document.createElement("a");
  //     var aText = document.createTextNode("GitHub Link");
  //     a.appendChild(aText);
  //     a.target = "_blank";
  //     a.href = gitHubLink;
  //     repoEl.appendChild(a);
  //     // appending repoEl to index.html
  //     repoContainer.appendChild(repoEl);
  //   }
  // }

  return (
    <div className="contentBubble" id="projects">
      <h2>PROJECTS</h2>
      <h3>Four recent projects I've been working on. Enjoy!</h3>
      <p>Hover over photo to enhance, click to go to GitHub repository.</p>
      <div className="projectContainer">
        <div className="project">
          <h3>AFL Website</h3>

          <div className="comingSoon">
            <img
              src={project1}
              alt="AFL website screenshot"
              width="100%"
              height="100%"
              onClick={() => {
                window.location.href =
                  "http://github.com/Hayden-code/AFLWebsite";
              }}
            ></img>
          </div>
          <p>
            Creating a website for AFL fans with features including: weekly
            matches, weather info, basic rules, news and team specific stats.
            Languages used: HTML, CSS, Javascript. Squiggle API used.
          </p>
        </div>

        <div className="project">
          <h3>eTrade Website</h3>

          <div className="comingSoon">
            <img
              src={project2}
              alt="eTrade screenshot"
              width="100%"
              height="100%"
              onClick={() => {
                window.location.href =
                  "https://github.com/Hayden-code/eTrade-Project2";
              }}
            ></img>
          </div>

          <p>
            A mock-up of an eCommerce website using MVC architecture, created by
            four full stack Web Developers.
          </p>
        </div>

        <div className="project">
          <h3>Project 3</h3>
          <div className="comingSoon">
            <img
              src={project3}
              alt="Tech Blog screenshot"
              width="100%"
              height="100%"
              onClick={() => {
                window.location.href =
                  "https://github.com/Hayden-code/Tech_Blog";
              }}
            ></img>
          </div>
          <p>
            Creating a tech blog using architectural design pattern
            Model-View-Controller as a template for website.
          </p>
        </div>

        <article className="project">
          <h3>Tech Blog</h3>

          <div className="comingSoon">Coming Soon!</div>
          <p>Description of Project</p>
          <p>Description of Project</p>
        </article>
      </div>
      {/* <div id="repos">
        <button className="repoBtn" onClick={getRepos()}>
          <h2>Show More Repositories!</h2>
        </button>
        <button
          className="repoBtn"
          onClick={() => {
            repoContainer.style.display = "none";
          }}
        >
          <h2>Hide Repositories!</h2>
        </button>
        <div
          id="extraReposContainer"
          onChange={() => {
            buttonClicked = true;
          }}
          ref={(this.repoContainer = react.createRef())}
        ></div>
      </div> */}
    </div>
  );
}

export default Projects;
