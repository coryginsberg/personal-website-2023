import React from 'react';
import ProjectCard from './components/projectCard';
import styles from './styles/projects.module.scss';
import mfbPreview from '../public/project_previews/mfb_preview.png';
import rtwPreview from '../public/project_previews/rtw_preview.png';
import igbPreview from '../public/project_previews/igb_preview.png';

export function Projects() {
  return (
    <div className={styles.root}>
      <h1>Project Spotlight</h1>
      <div className={styles.projectsLayout}>
        <ProjectCard
          title="Meta for Business"
          src={mfbPreview}
          href={'https://www.facebook.com/business/'}
        />
        <ProjectCard
          title="Reach The World On Facebook"
          src={rtwPreview}
          href={'https://reachtheworldonfacebook.com/'}
        />
        <ProjectCard
          title="Instagram for Business"
          src={igbPreview}
          href={'https://business.instagram.com/'}
        />
      </div>
    </div>
  );
}
