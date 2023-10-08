import React from "react";
import Miembro from "./miembro";

export default function Miembros(props) {
	return (
		<div className='miembrosGrid'>
			{props.people.map((personal) => {
				return <Miembro personal={personal} scheme={props.scheme} />;
			})}
		</div>
	);
}
