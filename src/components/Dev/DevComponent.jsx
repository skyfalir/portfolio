import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import {
	SiJavascript,
	SiReact,
	SiGit,
	SiAdobephotoshop,
	SiFigma,
	SiAdobeillustrator,
} from 'react-icons/si';
import './dev.css';

const projects = [
	{
		title: 'nAuction',
		image: 'https://i.gyazo.com/a3849be6fc0db147345954036efa121a.png',
		description: 'Noroff second semester project.',
		githubLink: 'https://github.com/skyfalir/nAuction-Project',
		netlifyLink: 'https://lively-medovik-d6f9c7.netlify.app/',
	},
	{
		title: 'eCom',
		image: 'https://i.gyazo.com/240457d6b5c19729ca4b6810349bc38c.jpg',
		description: 'A React project focusing on ecommerce.',
		githubLink: 'https://github.com/skyfalir/eCom',
		netlifyLink: 'https://lighthearted-frangipane-039922.netlify.app',
	},
	{
		title: 'Holidaze',
		image: 'https://i.gyazo.com/d97b70e82f60403bdabe9d7d289f4d1a.jpg',
		description: 'Noroff final exam project.',
		githubLink: 'https://github.com/skyfalir/holidaze',
		netlifyLink: 'https://svh-holi.netlify.app/',
	},
];

const DevCard = ({ selected, project }) => (
	<div
		className={`dev-card ${selected ? 'visible' : ''}`}
		style={{ backgroundImage: `url(${project.image})` }}
	>
		<div className="dev-card-info">
			<h3>{project.title}</h3>
			<p>{project.description}</p>
		</div>
		<div className="dev-buttons">
			<a href={project.githubLink} target="_blank" rel="noopener noreferrer">
				<FaGithub /> GitHub
			</a>
			<a href={project.netlifyLink} target="_blank" rel="noopener noreferrer">
				<FaExternalLinkAlt /> Live demo
			</a>
		</div>
	</div>
);

const DevComponent = ({ selected }) => (
	<div className={`dev-content ${selected ? 'visible' : ''}`}>
		<div className="about-dev">
			<h2>Some of my work as a Developer</h2>
			<p>
				With a passion for creative thinking and problem solving, <br />
				I am always looking for new and exciting projects to work on. <br />
				Aside from my work as a musician, I am also passionate about technology!{' '}
				<br />
			</p>
			<div className="tools">
				<p>Tools:</p>
				<SiJavascript /> <SiGit /> <SiReact /> <SiAdobephotoshop /> <SiFigma />{' '}
				<SiAdobeillustrator />
			</div>
		</div>
		<div className="mid-section">
			<h3>Some of my work</h3>
			<div className="dev-cards-container">
				{projects.map((project) => (
					<DevCard key={project.title} project={project} />
				))}
			</div>
		</div>
		<button
			className="mail-button"
			onClick={() => (window.location.href = 'mailto:skyflairofficial@gmail.com')}
		>
			Get in touch
		</button>
		<div className="pattern"></div>
	</div>
);

export default DevComponent;
