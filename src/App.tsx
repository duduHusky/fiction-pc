import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import HomeLayout from "./pages/layout/HomeLayout";
import BookInfo from "./pages/BookInfo";
import BookRead from "./pages/BookRead";
import SearchResult from "./pages/SearchResult";
import Login from "./pages/Login";
import AuthRoute from "./components/AuthRoute";
import Shelf from "./pages/Shelf";
import UserCenter from "./pages/UserCenter"
import UserLayout from "./pages/layout/UserLayout";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={"/"} element={<HomeLayout />}>
					<Route index element={<Home />}/>
					<Route path=":bookId" element={<BookInfo />} />
					<Route path=":bookId/read_:chapterId" element={<BookRead />} />
					<Route path="search/result" element={<SearchResult />} />
				</Route>
				<Route path={"/user"} element={<UserLayout />}>
					<Route element={<AuthRoute component={UserCenter} />}>
						<Route path="shelf" element={<AuthRoute component={Shelf} />} />
					</Route>
				</Route>
				<Route path={"/login"} element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
