import "./App.css";
import React from 'react';
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Main from "./components/main/Main";
import MainContent from './components/main/MainContent';
import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Song";
import UseEffectDemo from "./features/UseEffect/UseEffectDemo";
import CountDown from "./features/UseEffect/CountDown";
import StopWatch from "./features/UseEffect/StopWatch";


function App() {
	return (
		
	<>
			<Navbar/>
			<Main/>
			
			{/* <MainContent/> */}

			{/* <ColorList/> */}
			
			{/* <TodoFeature/> */}

			{/* <AlbumFeature/> */}

			{/* <UseEffectDemo/> */}

			<CountDown/>
		
			{/* <StopWatch/> */}
		
			<Footer/>
	</>
	);
}


export default App; 
