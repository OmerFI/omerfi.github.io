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
import Tech from "./Tech";

const TechStack = () => {
  return (
    <div className="tech-stack" id="tech-stack">
      <div className="title">
        <p className="highlighted">My Tech Stack</p>
        <p className="light">Technologies I’ve been working with recently</p>
      </div>
      <div className="icons">
        <Tech SVG={Python} name="Python" />
        <Tech SVG={Django} name="Django" />
        <Tech SVG={Html} name="HTML" />
        <Tech SVG={CSS} name="CSS" />
        <Tech SVG={JavaScript} name="JavaScript" />
        <Tech SVG={React} name="React" />
        <Tech SVG={Bootstrap} name="Bootstrap" />
        <Tech SVG={Linux} name="Linux" />
        <Tech SVG={Postgresql} name="PostgreSQL" />
        <Tech SVG={Docker} name="Docker" />
        <Tech SVG={Csharp} name="C#" lowercaseName="csharp" />
        <Tech SVG={Unity} name="Unity" />
      </div>
    </div>
  );
};

export default TechStack;
