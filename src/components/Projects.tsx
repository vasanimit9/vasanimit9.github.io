import { faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import strings from "../strings";
import { ProjectInfo } from "../types";
import { combineClasses } from "../utilMethods";

const Projects = () => {
  const ProjectCard = ({ project }: { project: ProjectInfo }) => (
    <div
      style={projectCardStyle}
      className={combineClasses(projectCardClassList)}
    >
      <div
        style={projectTitleStyle}
        className={combineClasses(projectTitleClassList)}
      >
        {project.name}
      </div>
      <div className={combineClasses(projectContentClassList)}>
        {project.description}
      </div>
      <div>
        <a
          href={project.repo}
          className={combineClasses(buttonClassList)}
          rel="noreferrer noopener"
          target="_blank"
          style={buttonStyles}
        >
          <FontAwesomeIcon icon={faGitAlt} />
        </a>
        {project.website && (
          <a
            href={project.website}
            className={combineClasses(buttonClassList)}
            rel="noreferrer noopener"
            target="_blank"
            style={buttonStyles}
          >
            <FontAwesomeIcon icon={faGlobe} />
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div className={combineClasses(containerClassList)}>
      <div className={combineClasses(projectsContainerClassListDesktop)}>
        <div className={combineClasses(projectContainerClassList)}>
          {strings.projects.map((project, index) => {
            if (index % 3 !== 0) {
              return null;
            }
            return <ProjectCard project={project} key={index} />;
          })}
        </div>
        <div className={combineClasses(projectContainerClassList)}>
          {strings.projects.map((project, index) => {
            if (index % 3 !== 1) {
              return null;
            }
            return <ProjectCard project={project} key={index} />;
          })}
        </div>
        <div className={combineClasses(projectContainerClassList)}>
          {strings.projects.map((project, index) => {
            if (index % 3 !== 2) {
              return null;
            }
            return <ProjectCard project={project} key={index} />;
          })}
        </div>
      </div>
      <div className={combineClasses(projectsContainerClassListMobile)}>
        <div className={combineClasses(projectContainerClassList)}>
          {strings.projects.map((project, index) => {
            return <ProjectCard project={project} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Projects);

const projectCardStyle: React.CSSProperties = {};

const containerClassList: string[] = [
  "container-fluid",
  "p-20",
  "h-full",
  "w-full",
];

const projectsContainerClassListDesktop: string[] = [
  "row",
  "hidden-sm-and-down",
];

const projectsContainerClassListMobile: string[] = ["row", "hidden-md-and-up"];

const projectContainerClassList: string[] = ["col-md-4"];

const projectCardClassList: string[] = [
  "card",
  "d-flex",
  "flex-column",
  "align-items-center",
  "justify-content-between",
];

const projectTitleStyle: React.CSSProperties = {};

const projectTitleClassList: string[] = [
  "card-title",
  "d-flex",
  "flex-column",
  "justify-content-center",
  "mb-20",
  "text-center",
];

const projectContentClassList: string[] = ["mb-20", "text-center"];

const buttonClassList: string[] = [
  "btn",
  "mx-5",
  "btn-primary",
  "w-25",
  "d-inline-flex",
  "justify-content-center",
  "align-items-center",
];

const buttonStyles: React.CSSProperties = {
  borderRadius: 25,
};
