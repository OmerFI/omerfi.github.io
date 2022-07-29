import { ReactComponent as Python } from "../images/python.svg";
import { ReactComponent as Django } from "../images/django.svg";
import { ReactComponent as Html } from "../images/html.svg";
import { ReactComponent as CSS } from "../images/css.svg";
import { ReactComponent as JavaScript } from "../images/javascript.svg";
import { ReactComponent as React } from "../images/react.svg";
import { ReactComponent as Bootstrap } from "../images/bootstrap.svg";
import { ReactComponent as Linux } from "../images/linux.svg";
import { ReactComponent as Postgresql } from "../images/postgresql.svg";
import { ReactComponent as Docker } from "../images/docker.svg";
import { ReactComponent as Csharp } from "../images/csharp.svg";
import { ReactComponent as Unity } from "../images/unity.svg";

const TechStack = () => {
  return (
    <div className="tech-stack" id="tech-stack">
      <div className="title">
        <p className="highlighted">My Tech Stack</p>
        <p className="light">Technologies I’ve been working with recently</p>
      </div>
      <div className="icons">
        <div className="icon python">
          <Python width="72px" alt="Python Icon" />
        </div>
        <div className="icon django">
          <Django width="72px" alt="Django Icon" />
        </div>
        <div className="icon html">
          <Html width="72px" alt="Html Icon" />
        </div>
        <div className="icon css">
          <CSS width="72px" alt="CSS Icon" />
        </div>
        <div className="icon javascript">
          <JavaScript width="72px" alt="JavaScript Icon" />
        </div>
        <div className="icon react">
          <React width="72px" alt="React Icon" />
        </div>
        <div className="icon bootstrap">
          <Bootstrap width="72px" alt="Bootstrap Icon" />
        </div>
        <div className="icon linux">
          <Linux width="72px" alt="Linux Icon" />
        </div>
        <div className="icon postgresql">
          <Postgresql width="72px" alt="Postgresql Icon" />
        </div>
        <div className="icon docker">
          <Docker width="72px" alt="Docker Icon" />
        </div>
        <div className="icon csharp">
          <Csharp width="72px" alt="Csharp Icon" />
        </div>
        <div className="icon unity">
          <Unity width="72px" alt="Unity Icon" />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
