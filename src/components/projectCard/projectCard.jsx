import React from 'react';
import * as social from '../../assets/images/social';
import * as projects from '../../assets/images/projects';

const ProjectCard = ({ title, desc, videoLink, codeLink, pageLink, cover, name, icon }) => {
  return (
    <a alt={title} rel="noopener noreferrer">
      <div className="card-info">
        <h1 className="card-title">{title}</h1>
        <h4 className="card-desc">{desc}</h4>
        <div className="project-links">
          {codeLink !== "-" && (
            <a href={codeLink} className="project-links" target="_blank">
              <img src={social.gh} alt="Code Link" className="project-links-image" />
            </a>
          )}
          {pageLink !== "-" && (
            <a href={pageLink} className="project-links" target="_blank">
              <img src={social.web} alt="Page Link" className="project-links-image" />
            </a>
          )}
          {videoLink !== "-" && (
            <a href={videoLink} className="project-links" target="_blank">
              <img src={social.demo} alt="Video Link" className="project-links-image" />
            </a>
          )}
        </div>
      </div>
      <div className="card">
        <div className="wrapper">
          <img src={projects[cover]} className="cover-image" alt="Cover" />
        </div>
        <img src={projects[name]} className="title" alt="Title" />
        <img src={projects[icon]} className="character" alt="Icon" />
      </div>
    </a>
  );
};

export default ProjectCard;
