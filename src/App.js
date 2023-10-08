import React, { useState } from "react";
import "./index.css";
import Topbar from "./components/topbar";
import MainPage from "./pages/mainPage";
import Miembros from "./components/miembros";
import EndPage from "./components/endPage";
import { staff } from "./images/staff/staff";
import Team from "./components/team";
import { teamsList } from "./images/teams/teams";

function App() {
	const [showPage, getShowPage] = useState(1);
	function updatePageTab(tabToRender) {
		getShowPage(tabToRender);
		window.scroll(0, 0);
	}
	var verdad = false;
	return (
		<div className='Supah'>
			<Topbar onTabChange={updatePageTab} />
			{showPage == 1 && <MainPage />}
			{showPage == 2 && <Miembros people={staff} scheme={0} />}
			{showPage == 3 && <Miembros people={staff} scheme={1} />}
			{showPage == 4 && <Miembros people={staff} scheme={2} />}
			{showPage == 5 && <Team team={teamsList[0]} />}
			<EndPage />
		</div>
	);
}

export default App;
