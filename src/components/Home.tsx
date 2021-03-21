import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import strings from "../strings";
import { combineClasses } from "../utilMethods";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const [visibleLength, setVisibleLength] = useState(0);
  const [subtitleVisibleLength, setSubtitleVisibleLength] = useState(0);
  const [
    contactButtonsVisibleLength,
    setContactButtonsVisibleLength,
  ] = useState(0);

  const contactButtons = [
    <a
      href={strings.contact.linkedin}
      className={combineClasses(contactButtonClassList)}
      target="_blank"
      rel="noopener noreferrer"
      style={contactButtonStyle}
    >
      <FontAwesomeIcon className="pr" icon={faLinkedinIn} />
    </a>,
    <a
      href={strings.contact.github}
      className={combineClasses(contactButtonClassList)}
      target="_blank"
      rel="noopener noreferrer"
      style={contactButtonStyle}
    >
      <FontAwesomeIcon icon={faGithub} />
    </a>,
  ];

  useEffect(() => {
    setTimeout(() => {
      if (visibleLength < strings.homepage.hero.name.length) {
        setVisibleLength((length) => length + 1);
      } else if (
        subtitleVisibleLength < strings.homepage.hero.subtitle.length
      ) {
        setSubtitleVisibleLength((length) => length + 1);
      } else if (contactButtonsVisibleLength < contactButtons.length) {
        setContactButtonsVisibleLength((length) => length + 1);
      }
    }, 50);
  }, [
    visibleLength,
    contactButtonsVisibleLength,
    subtitleVisibleLength,
    contactButtons.length,
  ]);

  return (
    <div className={combineClasses(containerClassList)}>
      <div style={heroStyle}>
        <br />
        {strings.homepage.hero.prelude}&nbsp;
        <br className="hidden-md-and-up" />
        {strings.homepage.hero.name.slice(0, visibleLength)}
      </div>
      <div className={combineClasses(subtitleClassList)}>
        {strings.homepage.hero.subtitle.slice(0, subtitleVisibleLength)}
      </div>
      <div className={combineClasses(contactButtonsContainerClassList)}>
        {contactButtons.slice(0, contactButtonsVisibleLength)}
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
  fontSize: 60,
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
