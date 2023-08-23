import "./App.css";
import React from 'react';
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Main from "./components/main/Main";
import MainContent from './components/main/MainContent';
import Todo from "./components/Todolist/Todo";
import ModalExample from "./components/Todolist/ModalBT";



function App() {
	return (
		
	<>
			<Navbar/>
			
			{/* <MainContent/> */}

			<Todo/>
		
		
	</>
	);
}


export default App; 
