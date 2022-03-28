import { NavLink } from "react-router-dom";

const Nav = () => {
	return <div className="bg-[#f55] text-white flex justify-center">
		<div className="w-[75rem] h-[50px] flex items-center text-[14px]">
			<NavLink title="首页" to="/" className="flex items-center px-5 h-full hover:bg-[#AB3939]">首页</NavLink>
			<NavLink title="排行" to="/rank.html" className="flex items-center px-5 h-full hover:bg-[#AB3939]">排行</NavLink>
			<NavLink title="分类" to="/category.html" className="flex items-center px-5 h-full hover:bg-[#AB3939]">分类</NavLink>
			<NavLink title="完本" to="/over.html" className="flex items-center px-5 h-full hover:bg-[#AB3939]">完本</NavLink>
			<NavLink title="书单" to="/booklist.html" className="flex items-center px-5 h-full hover:bg-[#AB3939]">书单</NavLink>
			<NavLink title="专题" to="/special.html" className="flex items-center px-5 h-full hover:bg-[#AB3939]">专题</NavLink>
			<NavLink title="原创专区" to="/author/author/index.html" target="_blank" className="flex items-center px-5 h-full hover:bg-[#AB3939] ml-auto">原创专区</NavLink>
			<NavLink title="用户中心" to="/user/index/index.html" className="flex items-center px-5 h-full hover:bg-[#AB3939]">用户中心</NavLink>
		</div>
	</div>
}

export default Nav
