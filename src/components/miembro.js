import React, { useState } from "react";
import "./miembro.css";

export default function Miembro({ personal }) {
	const [rol, setRol] = useState(personal.rol);
	const [rol2, setRol2] = useState("");
	const pfp = (
		<img
			src={personal.pfp}
			height={"200px"}
			width={"200px"}
			style={{ objectFit: "cover" }}
			alt='Miembro SpaceApps'
			className='miembroImagenPerfil'
		/>
	);
	function translate() {
		if (personal.rol2) {
			setRol2(personal.rol);
			setRol(personal.rol2);
		}
	}
	function untranslate() {
		if (personal.rol2) {
			setRol2(personal.rol2);
			setRol(personal.rol);
		}
	}
	const externalLink = (
		<a href={personal.link} target='_blank' rel='noopener noreferrer'>
			{personal.textLink}
		</a>
	);
	return (
		<div
			className='miembroSAComponente'
			onMouseEnter={translate}
			onMouseLeave={untranslate}
		>
			<div className='miembroFondo'>
				<div className='miembroNombre'>
					{personal.nombres}
					<br />
					{personal.apellidos}
					<hr />
					<div className='miembroDatoCurioso'>
						{rol}
						{externalLink}
					</div>
				</div>
			</div>
			{pfp}
		</div>
	);
}
