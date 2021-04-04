import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import strings from "../strings";
import { combineClasses } from "../utilMethods";

const Experience = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <Timeline darkMode={darkMode}>
      {strings.experience.map((exp, index) => (
        <Container
          darkMode={darkMode}
          even={index % 2 === 1}
          className={combineClasses(containerClassList[index % 2])}
          key={index}
        >
          <Card className={combineClasses(cardClassList)}>
            <div className={combineClasses(expCardTitleClassList)}>
              {exp.org}
            </div>
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
              <div className={combineClasses(buttonContainerClassList)}>
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
          </Card>
        </Container>
      ))}
    </Timeline>
  );
};

export default React.memo(Experience);

const Timeline = styled.div<{ darkMode: boolean }>`
  width: 100%;
  margin: 25px auto;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 6px;
    background-color: ${(props) => (props.darkMode ? `white` : `#25282c`)};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    border-radius: 3px;
  }

  @media screen and (max-width: 768px) {
    &::after {
      left: 2rem;
    }
  }
`;

const Container = styled.div<{ even: boolean; darkMode: boolean }>`
  ${(props) => props.even && `left: 50%;`}
  padding: 0 25px;
  &::after {
    content: "";
    position: absolute;
    height: 2rem;
    width: 2rem;
    ${(props) =>
      props.darkMode
        ? `
      background-color: #1890ff;
      border: 4px solid white;
    `
        : `background-color: #1890ff;`}
    top: 3.5rem;
    ${(props) => (props.even ? `left: -1rem;` : `right: -1rem;`)}
    border-radius: 50%;
    z-index: 1;
  }

  @media screen and (max-width: 768px) {
    left: 0;
    &::after {
      left: 1rem;
      top: 2.5rem;
    }
  }
`;

const containerClassList: string[][] = [
  ["col-md-5", "offset-md-1"],
  ["col-md-5"],
];

const Card = styled.div`
  border-radius: 6px !important;
`;

const cardClassList: string[] = ["card"];

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
  "mb-10",
  "w-full",
  "text-center",
];

const expCardContentClassList: string[] = ["mb-20", "text-center"];

const buttonContainerClassList: string[] = [
  "w-full",
  "d-flex",
  "justify-content-center",
];

const buttonClassList: string[] = [
  "btn",
  "mx-5",
  "btn-primary",
  "w-25",
  "d-inline-flex",
  "justify-content-center",
  "align-items-center",
  "mx-auto",
];

const buttonStyles: React.CSSProperties = {
  borderRadius: 25,
};
