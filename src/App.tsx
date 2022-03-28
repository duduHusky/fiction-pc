import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import BookInfo from "./pages/BookInfo";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={"/"} element={<Layout />}>
					<Route index element={<Home />}/>
					<Route path=":bookId" element={<BookInfo />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;