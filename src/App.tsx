import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import BookInfo from "./pages/BookInfo";
import BookRead from "./pages/BookRead";
import SearchResult from "./pages/SearchResult";
import Login from "./pages/Login";
import AuthRoute from "./components/AuthRoute";
import Shelf from "./pages/Shelf";
import UserCenter from "./pages/UserCenter"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={"/"} element={<Layout />}>
					<Route index element={<Home />}/>
					<Route path=":bookId" element={<BookInfo />} />
					<Route path=":bookId/read_:chapterId" element={<BookRead />} />
					<Route path="search/result" element={<SearchResult />} />
					<Route path="user" element={<AuthRoute component={UserCenter} />}>
						<Route path="shelf" element={<AuthRoute component={Shelf} />} />
					</Route>
				</Route>
				<Route path={"/login"} element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
