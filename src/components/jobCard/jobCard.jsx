import React from 'react';

const JobCard = ({ puesto, empresa, periodo, jobDesc, logros, link }) => {
  return (
    <div className="experience__description">
      <h3 className="experience__work">
        {puesto} <a href={link} className="link__enterprise">@ {empresa}</a>
      </h3>
      <p className="experience__date">{periodo}</p>
      <p className="experience__paragraph">{jobDesc}</p>
      <h4 className='experience__title'>Logros:</h4>
      {logros.map((logro, index) => (
        <p key={index} className="experience__paragraph">• {logro}</p>
      ))}
    </div>
  );
};

export default JobCard;