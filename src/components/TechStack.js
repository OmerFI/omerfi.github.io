import python from "../images/python.svg";
import django from "../images/django.svg";
import html from "../images/html.svg";
import css from "../images/css.svg";
import javascript from "../images/javascript.svg";
import react from "../images/react.svg";
import bootstrap from "../images/bootstrap.svg";
// import adobeIllustrator from "../images/adobe-illustrator.svg";
// import figma from "../images/figma.svg";
// import git from "../images/git.svg";
import linux from "../images/linux.svg";
import postgresql from "../images/postgresql.svg";
import docker from "../images/docker.svg";
import csharp from "../images/csharp.svg";
import unity from "../images/unity.svg";

const TechStack = () => {
  return (
    <div className="tech-stack" id="tech-stack">
      <div className="title">
        <p className="highlighted">My Tech Stack</p>
        <p className="light">Technologies I’ve been working with recently</p>
      </div>
      <div className="icons">
        <div className="icon python">
          <img src={python} width="72px" alt="python" />
        </div>
        <div className="icon django">
          <img src={django} width="72px" alt="django" />
        </div>
        <div className="icon html">
          <img src={html} width="72px" alt="html" />
        </div>
        <div className="icon css">
          <img src={css} width="72px" alt="css" />
        </div>
        <div className="icon javascript">
          <img src={javascript} width="72px" alt="javascript" />
        </div>
        <div className="icon react">
          <img src={react} width="72px" alt="react" />
        </div>
        <div className="icon bootstrap">
          <img src={bootstrap} width="72px" alt="bootstrap" />
        </div>
        {/* <div className="icon adobe-illustrator">
          <img src={adobeIllustrator} width="72px" alt="adobe illustrator" />
        </div>
        <div className="icon figma">
          <img src={figma} height="72px" alt="figma" />
        </div> */}
        <div className="icon linux">
          <img src={linux} width="72px" alt="linux" />
        </div>
        <div className="icon postgresql">
          <img src={postgresql} width="72px" alt="postgresql" />
        </div>
        {/* <div className="icon git">
          <img src={git} width="72px" alt="git" />
        </div> */}
        <div className="icon docker">
          <img src={docker} width="72px" alt="docker" />
        </div>
        <div className="icon csharp">
          <img src={csharp} width="72px" alt="csharp" />
        </div>
        <div className="icon unity">
          <img src={unity} width="72px" alt="unity" />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
