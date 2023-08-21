import "./App.css";
import React from 'react';
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Main from "./components/main/Main";
import MainContent from './components/main/MainContent';
import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Song";
import Register from "./features/Register/Register";
import ProductList from "./features/Product/ProductList";
import { Modal } from "bootstrap";
import ModalCreate from "./components/main/ModalCreate";


function App() {
	return (
		
	<>
			<Navbar/>
			
			<MainContent/>

	
			
		
		
	</>
	);
}


export default App; 
