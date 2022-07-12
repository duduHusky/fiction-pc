import { Link, NavLink, Outlet } from "react-router-dom";
import HeaderLogo from '../../static/images/header-text.png'
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const UserLayout = (): JSX.Element => {
    const navList = [
        {
            title: "我的首页",
            link: "/user",
            icon: HomeIcon
        },
        {
            title: "我的书架",
            link: "/user/shelf",
            icon: LibraryBooksIcon
        },
        {
            title: "消息中心",
            link: "/user/notification",
            icon: NotificationsNoneIcon
        },
    ]

    return (
        <>
            <div className="user-header h-[70px] bg-[#3e3d43] text-white flex">
                <div className="header-wrapper mx-9 flex flex-1">
                    <div className="header-logo w-[96px] flex">
                        <Link to={"/"} className="self-center">
                            <img src={HeaderLogo} alt="logo" className="self-center"/>
                        </Link>
                    </div>
                    <ul className="header-nav ml-[64px] flex">
                        {
                            navList.map((nav) =>
                                (
                                    <li className="text-[16px] flex">
                                        <NavLink
                                            to={nav.link}
                                            end
                                            className={
                                                ({isActive}) => isActive ? "px-[16px] flex items-center bg-[#ee4259]" : "px-[16px] flex items-center"
                                            }>
                                            <nav.icon />
                                            <span className="ml-[8px]">{nav.title}</span>
                                        </NavLink>
                                    </li>
                                )
                            )
                        }
                    </ul>
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default UserLayout