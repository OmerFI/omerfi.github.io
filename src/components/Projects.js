import pyforum from "../images/pyforum.png";
import domainmonitor from "../images/domainmonitor.png";
import pyprobs from "../images/pyprobs.png";
import pyflappy from "../images/pyflappy.png";
import dedektistanbul from "../images/dedektistanbul.png";
import googlesearchlanguagechanger from "../images/googlesearchlanguagechanger.png";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="title">
        <p className="highlighted">Projects</p>
        <p className="light">Things I've built</p>
      </div>
      <div className="content">
        <Project
          imgSrc={pyforum}
          projectName="PyForum"
          projectDescription="PyForum is a full-stack web application made using Django on the backend and React on the frontend."
          projectTechStack={["JavaScript", "React", "Django", "Django Rest Framework"]}
          livePreviewLink="https://pyforum.tech/"
          viewCodeLink="https://github.com/OmerFI/PyForum"
        />
        <Project
          imgSrc={domainmonitor}
          projectName="DomainMonitor"
          projectDescription="DomainMonitor is a web project that has a RESTful API to get a domain's subdomains and whois data."
          projectTechStack={["Flask", "Flask-RESTful", "Docker", "Nginx", "Swagger UI"]}
          viewCodeLink="https://github.com/OmerFI/DomainMonitor"
        />
        <Project
          imgSrc={pyprobs}
          projectName="PyProbs"
          projectDescription="A module that returns True or False output based on given probability."
          projectTechStack={["Python", "OOP", "Packaging"]}
          livePreviewLink="https://pypi.org/project/pyprobs/"
          viewCodeLink="https://github.com/OmerFI/PyProbs"
        />
        <Project
          imgSrc={googlesearchlanguagechanger}
          projectName="GSLanguageChanger"
          projectDescription="An extension that allows you to quickly change your Google Search language preferences."
          projectTechStack={["JavaScript", "Browser Extension"]}
          livePreviewLink="https://chrome.google.com/webstore/detail/google-search-language-ch/nklmaonpgdnlhmkppobhjeddgmmfdpmm"
          viewCodeLink="https://github.com/OmerFI/GoogleSearchLanguageChanger"
        />
        <Project
          imgSrc={pyflappy}
          projectName="PyFlappy"
          projectDescription="PyFlappy is a game made by using Python."
          projectTechStack={["Python", "Pygame"]}
          livePreviewLink="https://github.com/OmerFI/PyFlappy/releases/tag/v1.0"
          viewCodeLink="https://github.com/OmerFI/PyFlappy"
        />
        <Project
          imgSrc={dedektistanbul}
          projectName="Dedektistanbul"
          projectDescription="Dedektistanbul is a game made for Mağara Jam #4."
          projectTechStack={["C#", "Unity"]}
          livePreviewLink="https://omerfi.itch.io/dedektistanbul"
        />
      </div>
    </div>
  );
};

export default Projects;
