import AllButton from "Button/Button";
import "./App.css";
import React from "react";
import BoxMUI from "Box";
import AppBarMUI from "./AppBar/index";
import GridMUI from "GridMUI";
import AccordionMUI from "Accordion";
import RadioForm from "RadioForm";
import Layout from "components/Layout";

function App() {
	return (
		<div className="App">
			{/* <AppBarMUI />
			<RadioForm />
			<BoxMUI />
			<AccordionMUI />
			<GridMUI />
			<AllButton /> */}
			<Layout />
		</div>
	);
}

export default App;
