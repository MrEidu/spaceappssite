import React, { useState } from "react";
import "./miembro.css";

export default function Miembro({ personal, scheme }) {
	const [rol, setRol] = useState(personal.rol);
	const [rol2, setRol2] = useState("");
	const colorSqueme = [
		{ backgroundImage: "linear-gradient(#0042A6, #07173F)" },
		{ backgroundImage: "linear-gradient(#E43700, #8E1100)" },
		{ backgroundImage: "linear-gradient(#2E96F5, #0960E1)" },
	];
	const pfp = (
		<img
			src={personal.pfp}
			height={"200px"}
			width={"200px"}
			style={{ objectFit: "cover" }}
			alt='Integrante SpaceApps'
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
			<div className='etiquetaFondo' style={colorSqueme[scheme]}>
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
