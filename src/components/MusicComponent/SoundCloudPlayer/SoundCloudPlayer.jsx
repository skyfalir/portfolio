
import React from 'react';
import './soundcloudplayer.css';

const tracks = [
	'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/955148104&color=%2314183e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false',
	'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/826012121&color=%2314183e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false',
];

const SoundCloudPlayer = () => {
	return (
		<div className="soundcloud-player">
			{tracks.map((trackUrl, index) => (
				<iframe
					key={index}
					title={`SoundCloud Track ${index + 1}`}
					allow="autoplay"
					src={trackUrl}
				></iframe>
			))}
		</div>
	);
};

export default SoundCloudPlayer;
