import React from "react";
import "./endPage.css";
import { imagenes } from "../images/imagenes";
export default function EndPage() {
	const correo = "spaceapps@uach.mx";
	const logo1 = (
		<img src={imagenes.LogoCUU_Vertical} className='imagenEndPage' />
	);
	const logo2 = (
		<img src={imagenes.LogoNASA_Horizontal} className='imagenEndPage' />
	);
	return (
		<div className='endPage'>
			<div className='upperEndPage blockEndPage'>
				<div className='leftEndPage blockEndPage'>
					{logo1} <br />
					<br /> <a href='mailto: spaceapps@uach.mx'>spaceapps@uach.mx</a>
					<br />
					<br />
					Conoce las redes oficiales
				</div>
				<div className='rightEndPage'>
					{logo2}
					<br />
					<br />
					Space Apps es gestionado por
					<br />
					NASA Earth Science Division
					<br />
					<br />
					Sitio web Oficial:
					<br />
					<a
						href='https://www.spaceappschallenge.org'
						target='_blank'
						rel='noopener noreferrer'
					>
						NASA SPACE APPS CHALLENGE
					</a>
					<br />
				</div>
			</div>
			<hr />
			<div className='lowerEndPage blockEndPage'>
				© 2023 Todos los derechos reservados. Space Apps Challenge es una marca
				registrada de NASA.
			</div>
		</div>
	);
}
