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
          <div className="tooltip" data-tooltip="Python">
            <Python width="72px" alt="Python Icon" />
          </div>
        </div>
        <div className="icon django">
          <div className="tooltip" data-tooltip="Django">
            <Django width="72px" alt="Django Icon" />
          </div>
        </div>
        <div className="icon html">
          <div className="tooltip" data-tooltip="HTML">
            <Html width="72px" alt="Html Icon" />
          </div>
        </div>
        <div className="icon css">
          <div className="tooltip" data-tooltip="CSS">
            <CSS width="72px" alt="CSS Icon" />
          </div>
        </div>
        <div className="icon javascript">
          <div className="tooltip" data-tooltip="JavaScript">
            <JavaScript width="72px" alt="JavaScript Icon" />
          </div>
        </div>
        <div className="icon react">
          <div className="tooltip" data-tooltip="React">
            <React width="72px" alt="React Icon" />
          </div>
        </div>
        <div className="icon bootstrap">
          <div className="tooltip" data-tooltip="Bootstrap">
            <Bootstrap width="72px" alt="Bootstrap Icon" />
          </div>
        </div>
        <div className="icon linux">
          <div className="tooltip" data-tooltip="Linux">
            <Linux width="72px" alt="Linux Icon" />
          </div>
        </div>
        <div className="icon postgresql">
          <div className="tooltip" data-tooltip="PostgreSQL">
            <Postgresql width="72px" alt="Postgresql Icon" />
          </div>
        </div>
        <div className="icon docker">
          <div className="tooltip" data-tooltip="Docker">
            <Docker width="72px" alt="Docker Icon" />
          </div>
        </div>
        <div className="icon csharp">
          <div className="tooltip" data-tooltip="C#">
            <Csharp width="72px" alt="Csharp Icon" />
          </div>
        </div>
        <div className="icon unity">
          <div className="tooltip" data-tooltip="Unity">
            <Unity width="72px" alt="Unity Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
