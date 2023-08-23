import "./App.css";
import React from 'react';
import { Route, Routes } from 'react-router';

import Main from "./components/main/Main";

import MainLayout from "./components/layout/MainLayout";
import Login from "./components/Login/Login";
import AlbumFeature from "./features/Song";
import ColorList from "./features/Color/colorList";


function App() {
	return (
		
	<>
		<MainLayout>
		<div className="container" style={{ minHeight: 'calc(100vh  - 150px)' }}>

		<Routes>
				<Route path='/' element={<Main/>} />
				<Route path='/login' element={<Login/>} />
				<Route path='/color' element={<ColorList/>} />
				<Route path='/song/album' element={<AlbumFeature/>} />
				

		</Routes>
		</div>

		</MainLayout>			

			
	</>
	);
}


export default App; 
