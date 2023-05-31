import React from 'react';
import ProjectCard from './components/projectCard';
import styles from './styles/projects.module.scss';

export function Projects() {
  return (
    <div className={styles.root}>
      <h1>Project Spotlight</h1>
      <div className={styles.projectsLayout}>
        <ProjectCard
          title='Meta for Business'
          src={'/project_previews/mfb_preview.png'}
          href={new URL('https://www.facebook.com/business/')}
        />
        <ProjectCard
          title='Reach The World On Facebook'
          src={'/project_previews/rtw_preview.png'}
          href={new URL('https://reachtheworldonfacebook.com/')}
        />
        <ProjectCard
          title='Instagram for Business'
          src={'/project_previews/igb_preview.png'}
          href={new URL('https://business.instagram.com/')}
        />
      </div>
    </div>
  );
}
