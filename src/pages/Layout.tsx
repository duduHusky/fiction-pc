import { Outlet } from "react-router-dom";
import TopNav from "../components/TopNav";
import TopHead from "../components/TopHead";
import Nav from "../components/Nav";

export default function Layout() {
	return <div className="app flex flex-col">
		<TopNav />
		<TopHead />
		<Nav />
		<div className="w-[75rem] self-center">
			<Outlet />
		</div>
	</div>
}
