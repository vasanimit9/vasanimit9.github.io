import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import strings from "../strings";
import { WorkEx } from "../types";
import { combineClasses } from "../utilMethods";

const Experience = () => {
  const Exp = ({ exp }: { exp: WorkEx }) => (
    <div className={combineClasses(experienceCardContainer)}>
      <div className={combineClasses(expCardTitleClassList)}>{exp.org}</div>
      <div className={combineClasses(expCardSubtitleClassList)}>
        {exp.position},
        <br />
        {exp.startDate} - {exp.endDate}
      </div>
      {exp.description && (
        <div className={combineClasses(expCardContentClassList)}>
          {exp.description}
        </div>
      )}
      {exp.homepage && (
        <div>
          <a
            href={exp.homepage}
            rel="noopener noreferrer"
            target="_blank"
            style={buttonStyles}
            className={combineClasses(buttonClassList)}
          >
            <FontAwesomeIcon icon={faGlobe} />
          </a>
        </div>
      )}
    </div>
  );

  return (
    <div className={combineClasses(containerClassList)}>
      <div className={combineClasses(experienceContainerDesktopClassList)}>
        <div className={combineClasses(expColumnClassList)}>
          {strings.experience.map((exp, index) => {
            if (index % 3 !== 0) {
              return null;
            }
            return <Exp exp={exp} />;
          })}
        </div>
        <div className={combineClasses(expColumnClassList)}>
          {strings.experience.map((exp, index) => {
            if (index % 3 !== 1) {
              return null;
            }
            return <Exp exp={exp} />;
          })}
        </div>
        <div className={combineClasses(expColumnClassList)}>
          {strings.experience.map((exp, index) => {
            if (index % 3 !== 2) {
              return null;
            }
            return <Exp exp={exp} />;
          })}
        </div>
      </div>
      <div className={combineClasses(experienceContainerMobileClassList)}>
        <div className={combineClasses(expColumnClassList)}>
          {strings.experience.map((exp, index) => {
            return <Exp exp={exp} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Experience);

const containerClassList: string[] = [
  "container-fluid",
  "p-20",
  "h-full",
  "w-full",
];

const experienceContainerDesktopClassList: string[] = [
  "row",
  "hidden-sm-and-down",
];

const experienceContainerMobileClassList: string[] = [
  "row",
  "hidden-md-and-up",
];

const experienceCardContainer: string[] = [
  "card",
  "d-flex",
  "flex-column",
  "align-items-center",
  "justify-content-between",
];

const expColumnClassList: string[] = ["col-md-4"];

const expCardTitleClassList: string[] = [
  "card-title",
  "d-flex",
  "flex-column",
  "justify-content-center",
  "mb-5",
  "text-center",
];

const expCardSubtitleClassList: string[] = [
  "font-size-16",
  "mb-20",
  "w-full",
  "text-center",
];

const expCardContentClassList: string[] = ["mb-20", "text-center", "mb-20"];

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
