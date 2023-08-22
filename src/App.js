import "./App.css";
import React from 'react';
import Navbar from "./components/layout/Navbar";
import { Route, Routes } from "react-router-dom";
import Main from './components/main/Main';
import StudentList from "./components/StudentList/StudentList";
import NotFound from "./components/layout/NotFound";
import StudentDetail from "./components/StudentList/StudentDetail";
import Footer from "./components/layout/Footer";

function App() {
	return (
		
	<>
			<Navbar/>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/student/list' element={<StudentList />} />
				<Route path='/student/:studentId' element={<StudentDetail />} />
				<Route path='/*' element={<NotFound />} />
			
			
			</Routes>
			<Footer/>
		
	</>
	);
}


export default App; 
