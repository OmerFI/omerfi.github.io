import { ReactComponent as Chain } from "../images/link-chain.svg";
import { ReactComponent as GitHub } from "../images/link-github.svg";

import PropTypes from "prop-types";

const Project = ({
  imgSrc,
  projectName,
  projectDescription,
  projectTechStack,
  livePreviewLink,
  viewCodeLink,
}) => {
  const livePreviewEnabled = livePreviewLink || false;
  const livePreviewClass = livePreviewEnabled
    ? "live-preview"
    : "live-preview disabled";

  const viewCodeEnabled = viewCodeLink || false;
  const viewCodeClass = viewCodeEnabled ? "view-code" : "view-code disabled";

  return (
    <div className={`project ${projectName}`}>
      <img src={imgSrc} alt={projectName} />
      <div className="project-details">
        <p className="project-name">{projectName}</p>
        <p className="project-description">{projectDescription}</p>
        <p className="project-tech-stack">
          <span>Tech stack :</span> {projectTechStack}
        </p>
        <div className="links">
          <a
            className={livePreviewClass}
            target="_blank"
            rel="noopener noreferrer"
            href={livePreviewLink}
          >
            <Chain width="20" height="20" alt="Chain Icon" />
            <p>Live Preview</p>
          </a>
          <a
            className={viewCodeClass}
            href={viewCodeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub width="20" height="20" alt="GitHub Icon" />
            <p>View Code</p>
          </a>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  projectTechStack: PropTypes.string.isRequired,
  livePreviewLink: PropTypes.string,
  viewCodeLink: PropTypes.string,
};

export default Project;
