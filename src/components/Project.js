import chain from "../images/link-chain.svg";
import github from "../images/link-github.svg";

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
            <img src={chain} width="20" height="20" alt="link-chain" />
            <p>Live Preview</p>
          </a>
          <a
            className={viewCodeClass}
            href={viewCodeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} width="20" height="20" alt="link-github" />
            <p>View Code</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
