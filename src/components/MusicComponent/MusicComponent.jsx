import React from 'react';
import { FaMixcloud, FaBandcamp, FaSoundcloud } from 'react-icons/fa';
import SoundCloudPlayer from './SoundCloudPlayer/SoundCloudPlayer';
import './musiccomponent.css';
const MusicComponent = () => {
  return (
    <div className="music-content">
      <div className="music-header">
        <h2 className="artist-name">SkyFlair</h2>
        <p className="artist-paragraph">
          With almost 13 years of experience with music, I've explored a vast range of genres and styles.
          Music has been a passion of mine for as long as I can remember, and I'm always exploring new and exciting methods to express myself with sound.
        </p>
      </div>
      <SoundCloudPlayer />
      <div className="music-social-icons">
        {}
        <a href="https://skyflairofficial.bandcamp.com/" target="_blank" rel="noopener noreferrer"><FaBandcamp /></a>
        <a href="https://www.mixcloud.com/SkyFlair/" target="_blank" rel="noopener noreferrer"><FaMixcloud /></a>
        <a href="https://soundcloud.com/skyflairofficial" target="_blank" rel="noopener noreferrer"><FaSoundcloud /></a>
      </div>
      <div className="pattern"></div>
    </div>
  );
};
export default MusicComponent;