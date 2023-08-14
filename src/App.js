import "./App.css";
import React from 'react';
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Main from "./components/main/Main";
import MainContent from './components/main/MainContent';
import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Song";
import UseState from "./features/UseState/UseState";
import Counter from "./features/UseState/Counter";
import LuckyMan from "./features/UseState/LuckyMan";
import Login from "./features/UseState/Login";
import UseStateAdvanced from "./features/UseState/UseStateAdvanced";
import Car from "./features/UseState/Car";


function App() {
	return (
		
	<>
		<Navbar/>
		<Main/>

		{/* <UseState/> */}

		{/* <AlbumFeature/> */}
		
		{/* <Counter/> */}

		{/* <LuckyMan/> */}

		{/* <Login/> */}

		{/* <UseStateAdvanced/> */}

		<Car/>

		<Footer/>
		
		
	</>
	);
}


export default App; 
