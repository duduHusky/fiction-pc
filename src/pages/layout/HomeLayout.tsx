import { Outlet } from "react-router-dom";
import TopNav from "../../components/TopNav";
import TopHead from "../../components/TopHead";
import Nav from "../../components/Nav";
import CopyRight from "../../components/CopyRight";

export default function HomeLayout() {
	return <div className="app flex flex-col">
		<TopNav />
		<TopHead />
		<Nav />
		<div className="max-w-[75rem] self-center">
			<Outlet />
		</div>
		<CopyRight />
	</div>
}
