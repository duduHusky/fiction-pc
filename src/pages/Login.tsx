import logo from '../static/images/logo.png'
import { Link, useLocation } from "react-router-dom"
import CopyRight from "../components/CopyRight"
import { useState } from "react"
import { getInfo, login } from "../service/user"
import { useDispatch } from "react-redux"
import { setInfo, setToken } from "../store/user/userSlice"
import classNames from "classnames"
import FontIcons from "../components/FontIcons"

const Login = () => {
	const location = useLocation()
	const dispatch = useDispatch()

	const [username, setUsername] = useState<string>("")
	const [password, setPassword] = useState<string>("")
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const Login = async () => {
		setIsLoading(true)
		const res = await login({username, password})
		console.log(res)
		dispatch(setToken(res.data.token))
		const info = await getInfo()
		console.log(info)
		dispatch(setInfo(info.data))
		setIsLoading(false)
	}

	return <div className="flex flex-col">
		<div className="mt-10 flex justify-center">
			<div className="w-[75rem]">
				<img src={logo} alt="" className="w-56 h-14"/>
			</div>
		</div>
		<div className="w-[75rem] bg-[#f55] h-20 flex justify-center items-center self-center mt-4">
			<span className="text-white text-[26px]">用户中心</span>
		</div>
		<div className="bg-white w-[75rem] self-center flex justify-center items-center">
			<div className="pt-16 pb-20">
				<div className="px-7 pt-7 border border-[E9E9E9] w-96">
					<div className="text-[16px] text-[#626267]">账号登录</div>
					<div className="flex flex-col">
						<input
							className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-6 ring-1 ring-slate-200 shadow-sm mt-9"
							type="text" placeholder="请输入你的账号"
							value={username}
							onChange={event => setUsername(event.target.value)}
						/>
						<input
							className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-6 ring-1 ring-slate-200 shadow-sm mt-5"
							type="password" placeholder="请输入你的密码"
							value={password}
							onChange={event => setPassword(event.target.value)}
						/>
						<button className={classNames("h-10 px-6 font-semibold rounded-md bg-[#f55] text-white mt-9 mb-5", {"opacity-40": isLoading})} onClick={Login} disabled={isLoading}>
							{isLoading ? <FontIcons name="spinner" className="animate-spin" /> : "登录"}
						</button>
						<div className="text-[14px] text-[#929297] pb-20 self-end">
							<Link to="/register">注册账号</Link>
						</div>
					</div>
				</div>

			</div>
		</div>
		<CopyRight/>
	</div>
}
export default Login
