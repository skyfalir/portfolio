import React, { useState } from 'react';
import { FaTimes, FaMusic } from 'react-icons/fa';
import { FaComputer } from 'react-icons/fa6';
import { GiComputing, GiMusicalKeyboard } from 'react-icons/gi';
import DevComponent from '../components/Dev/DevComponent';
import MusicComponent from '../components/MusicComponent/MusicComponent';
import SideBar from '../components/Sidebar/Sidebar';
import './home.css';
function Portfolio() {
	const [selectedSide, setSelectedSide] = useState(null);
	const handleClose = () => {
		setSelectedSide(null);
	};
	let closeButtonClass = 'close-button';
	if (selectedSide === 'dev') {
		closeButtonClass += ' close-dev-selected';
	} else if (selectedSide === 'music') {
		closeButtonClass += ' close-music-selected';
	}
	return (
		<div className="split-screen">
			<div
				className={` ${
					selectedSide === 'dev' ? 'full-screen dev-selected' : 'left-side'
				}`}
				onClick={() => setSelectedSide('dev')}
			>
				<div className={`overlay ${selectedSide ? 'hidden' : ''}`}>
					<FaComputer className="overlay-icons" />{' '}
					<div className="overlay-text">
						<h2>My Work as a Developer</h2>
						<p>Learn journey as a developer.</p>
					</div>
					<GiComputing className="overlay-icons" />
				</div>
				{selectedSide === 'dev' ? (
					<DevComponent selected={selectedSide === 'dev'} />
				) : null}
			</div>
			<SideBar />
			<div
				className={` ${
					selectedSide === 'music' ? 'full-screen music-selected' : 'right-side'
				}`}
				onClick={() => setSelectedSide('music')}
			>
				<div className={`overlay ${selectedSide ? 'hidden' : ''}`}>
					<FaMusic className="overlay-icons" />{' '}
					<div className="overlay-text">
						<h2>My Work as a Musician</h2>
						<p>My creative endeavors in music.</p>
					</div>{' '}
					<GiMusicalKeyboard className="overlay-icons" />
				</div>
				{selectedSide === 'music' ? <MusicComponent /> : null}
			</div>
			{selectedSide && (
				<div className={closeButtonClass} onClick={handleClose}>
					<FaTimes />
				</div>
			)}
		</div>
	);
}
export default Portfolio;
