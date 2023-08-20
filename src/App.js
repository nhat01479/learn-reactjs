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


function App() {
	return (
		
	<>
			<Navbar/>
			{/* <Main/> */}
			
			{/* <MainContent/> */}

			{/* <ColorList/> */}
			
			{/* <TodoFeature/> */}

			{/* <AlbumFeature/> */}
			<Register/>
			{/* <ProductList/> */}
			{/* <Footer/> */}
		
		
	</>
	);
}


export default App; 
