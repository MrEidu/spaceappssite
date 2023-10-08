import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./topbar.css";
import logoSpaceApps from "../images/LogoCUU_Horizontal.svg";

const tabs = [
	{
		text: "¿Qué es Space Apps?",
		route: "/introduction",
		key: 1,
	},
	{
		text: "Equipo",
		route: "/fefef",
		key: 2,
	},
	{
		text: "Mentores",
		route: "/recruit",
		key: 3,
	},
	{
		text: "Jueces",
		route: "/recruit",
		key: 4,
	},
	{
		text: "Participantes",
		route: "/recruit",
		key: 5,
	},
	{
		text: "Highlights",
		route: "/recruit",
		key: 6,
	},
];

export default function Topbar(props) {
	const [showVTabs, setTabs] = useState("");
	const [topbarSize, setTopbarSize] = useState("80px");
	const [showBar, setShowBar] = useState("lightgrey");
	function handleTabs() {
		if (topbarSize === "80px") {
			setTopbarSize("500px");
			setShowBar("white");
		} else {
			setTopbarSize("80px");
			setShowBar("lightgrey");
		}
	}

	function handleTabsClick(tabIdKey) {
		console.log("topBar tab " + tabIdKey + " clicked");
		props.onTabChange(tabIdKey);
		try {
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className='topbar' style={{ height: topbarSize }}>
			<div className='imageDiv'>
				<img
					className='image-topBar'
					src={logoSpaceApps}
					alt='Space Apps CUU Logo'
				/>
			</div>
			<div className='tabsHorizontal'>
				{tabs.map((tab) => (
					<div
						className='tab'
						id={tab.key}
						onClick={() => handleTabsClick(tab.key)}
					>
						<div className='tabText'>{tab.text}</div>
						<div className='innerAnimation' id={tab.key} />
					</div>
				))}
			</div>
			<div className='tabsVertical'>
				<div className='tabsButton' onClick={handleTabs}>
					<div
						className='selectBtabs topBar'
						style={{ backgroundColor: showBar }}
					/>
					<div className='selectBtabs' />
					<div className='selectBtabs' style={{ backgroundColor: showBar }} />
				</div>
				<div className='tabsRow'>
					{tabs.map((tab) => (
						<div
							className='tab'
							id={tab.key}
							onClick={() => handleTabsClick(tab.key)}
						>
							<p>{tab.text}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
