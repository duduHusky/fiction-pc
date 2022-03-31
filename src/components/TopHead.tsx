import logo from '../static/images/logo.png'
import FontIcons from "./FontIcons"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useAppSelector } from "../store/hooks"
import { selectUserState } from "../store/user/userSlice"

export default function TopHead() {
	const navigate = useNavigate()
	const userState = useAppSelector(selectUserState)
	const [searchWord, setSearchWord] = useState<string>("")

	const { isLogin, info: userInfo } = userState
	const search = () => {
		searchWord && navigate(`/search/result?keyword=${searchWord}`)
	}

	return <div className="bg-white flex justify-center">
		<div className="w-[75rem] flex justify-between">
			<div className="my-4 flex flex-1">
				<img src={logo} className="w-56 h-14" title="DuDuDu" alt=""/>
				<div className="w-full self-center flex">
					<input
						className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-3 ring-1 ring-slate-200 shadow-sm"
						type="text" aria-label="Filter projects" placeholder="请输入要搜索的书名"
						value={searchWord}
						onChange={event => setSearchWord(event.target.value)}
					/>
					<button className="bg-[#f55] w-11 h-11 ml-2 rounded-md" onClick={search}>
						<FontIcons name="magnifying-glass" color="#fff"/>
					</button>
				</div>
			</div>
			<ul className="ml-16 flex items-center">
				<li className="mr-7">
					{isLogin && userInfo?.portrait ?
						<img src={userInfo.portrait} height={20} width={20} className="inline-block rounded-full"/> :
						<FontIcons name="r-circle-user" color="#f55"/>
					}
					<Link title="登录" to="/login"
						  className="ml-2 text-[14px] text-[#f55]">{userInfo?.nickname ?? "登录"}</Link>
					<span className="text-[#f55] mx-1">|</span>
					<Link title="注册" to="/user/auth/register.html"
						  className="text-[14px] text-[#f55]">{isLogin ? "充值" : "注册"}</Link>
				</li>
				<li className="mr-7">
					<FontIcons name="books" color="#929297"/>
					<Link to="/user/shelf" className="ml-2 text-[14px] text-[#929297]">我的书架</Link>
				</li>
				<li className="inline-block">
					<FontIcons name="r-clock" color="#929297"/>
					<Link to="/user/history" className="ml-2 text-[14px] text-[#929297]">阅读历史</Link>
				</li>
			</ul>
		</div>
	</div>
}
