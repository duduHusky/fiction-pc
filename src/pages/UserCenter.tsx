import { NavLink, Outlet } from "react-router-dom"

interface ActionProp {
	to: string;
	title: string;
}

const UserActions: ActionProp[] = [
	{ to: '/user/center', title: '个人中心' },
	{ to: '/user/center', title: '超级会员' },
	{ to: '/user/center', title: '我的资产' },
	{ to: '/user/shelf', title: '我的书架' },
	{ to: '/user/center', title: '阅读历史' },
	{ to: '/user/center', title: '我的书单' },
	{ to: '/user/center', title: '我的推荐' },
	{ to: '/user/center', title: '我的评论' },
	{ to: '/user/center', title: '我的签到' },
	{ to: '/user/center', title: '我的评分' },
	{ to: '/user/center', title: '我的邀请' },
	{ to: '/user/center', title: '原创专区' },
]

const SystemActions: ActionProp[] = [
	{ to: '/', title: '基础资料' },
	{ to: '/', title: '修改密码' },
	{ to: '/', title: '账号绑定' },
	{ to: '/', title: '退出登录' },
]

const UserCenter = () => {
	return <div className="flex mt-5">
		<div className="w-60 mr-2.5">
			<div className="bg-white p-4 mb-2.5">
				<div className="text-[18px] text-[#626267] font-bold pb-2.5 border-b border-[#E9E9E9]">我的</div>
				<ul className="list-disc list-inside">
					{
						UserActions.map(action => <NavLink key={action.title} to={action.to}
														   className={({ isActive }) => isActive ? "text-[#626267] text-[14px] text-[#f55]" : "text-[#626267] text-[14px]"}>
							<li className="mt-3">{action.title}</li>
						</NavLink>)
					}
				</ul>
			</div>
			<div className="bg-white p-4">
				<div className="text-[18px] text-[#626267] font-bold pb-2.5 border-b border-[#E9E9E9]">设置</div>
				<ul className="list-disc list-inside">
					{
						SystemActions.map(action => <NavLink key={action.title} to={action.to}
															 className={({ isActive }) => isActive ? "text-[#626267] text-[14px] text-[#f55]" : "text-[#626267] text-[14px]"}>
							<li className="mt-3">{action.title}</li>
						</NavLink>)
					}
				</ul>
			</div>
		</div>
		<Outlet/>
	</div>
}

export default UserCenter
