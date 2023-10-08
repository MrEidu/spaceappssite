import React, { useState } from "react";
import "./index.css";
import Topbar from "./components/topbar";
import MainPage from "./pages/mainPage";
import Miembros from "./components/miembros";
import EndPage from "./components/endPage";

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
			{showPage == 2 && <Miembros />}
			<EndPage />
		</div>
	);
}

export default App;
