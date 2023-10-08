import React from "react";

export default function Team({ team }) {
	const pfp = (
		<img
			src={team.picture}
			height={"100px"}
			width={"100px"}
			style={{ objectFit: "cover" }}
			alt='Equipo SpaceApps'
			className='teamImagen'
		/>
	);
	const externalLink = (
		<a
			href={team.link}
			target='_blank'
			rel='noopener noreferrer'
			className='teamLink'
		>
			{team.textLink}
		</a>
	);

	return (
		<div className='teamSAComponente'>
			<div className='teamFondo' style={{ background: team.color }}>
				<div className='teamTitle'>{team.title}</div>
				<div className='teamText'>{team.text}</div>
				{externalLink}
			</div>
			{pfp}
		</div>
	);
}
