import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import strings from "../strings";
import { combineClasses } from "../utilMethods";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const [visibleLength, setVisibleLength] = useState(0);

  const contactButtons = [
    <a
      href={strings.contact.linkedin}
      className={combineClasses(contactButtonClassList)}
      target="_blank"
      rel="noopener noreferrer"
      style={contactButtonStyle}
      key={strings.contact.linkedin}
    >
      <FontAwesomeIcon icon={faLinkedinIn} />
    </a>,
    <a
      href={strings.contact.github}
      className={combineClasses(contactButtonClassList)}
      target="_blank"
      rel="noopener noreferrer"
      style={contactButtonStyle}
      key={strings.contact.github}
    >
      <FontAwesomeIcon icon={faGithub} />
    </a>,
  ];

  useEffect(() => {
    setTimeout(() => {
      if (visibleLength < strings.homepage.hero.name.length) {
        setVisibleLength((length) => length + 1);
      }
    }, 100);
  }, [visibleLength]);

  return (
    <div className={combineClasses(containerClassList)}>
      <div style={heroStyle}>
        <br />
        {strings.homepage.hero.prelude}&nbsp;
        <br className="hidden-md-and-up" />
        {strings.homepage.hero.name.slice(0, visibleLength)}
      </div>
      <div className={combineClasses(subtitleClassList)}>
        {strings.homepage.hero.subtitle}
      </div>
      <div className={combineClasses(contactButtonsContainerClassList)}>
        {contactButtons}
      </div>
    </div>
  );
};

export default React.memo(Home);

const containerClassList: string[] = [
  "container",
  "d-flex",
  "flex-column",
  "align-items-start",
  "justify-content-start",
  "w-full",
  "h-half",
  "px-20",
];

const heroStyle: React.CSSProperties = {
  fontSize: 54,
};

const contactButtonsContainerClassList: string[] = [
  "d-flex",
  "justify-content-between",
];

const contactButtonStyle: React.CSSProperties = {
  borderRadius: 25,
};

const contactButtonClassList: string[] = [
  "btn",
  "ml-5",
  "mr-10",
  "d-flex",
  "align-items-center",
  "btn-primary",
  "justify-content-center",
  "w-25",
];

const subtitleClassList: string[] = ["mb-20", "ml-5", "font-size-18"];
