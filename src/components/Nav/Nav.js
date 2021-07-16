import './Nav.scss'
import {NavLink} from 'react-router-dom'

function Nav() {
    return <div className="nav">
        <div className="nav-list">
            <NavLink to="/" exact activeClassName="active">首页</NavLink>
            <NavLink to="/rank">排行</NavLink>
            <NavLink to="/category">分类</NavLink>
            <NavLink to="/over">完本</NavLink>
            <NavLink to="/booklist">书单</NavLink>
            <NavLink to="/special">专题</NavLink>
            <NavLink to="/author" style={{marginLeft: 'auto'}}>原创专区</NavLink>
            <NavLink to="/user">用户中心</NavLink>
        </div>
    </div>
}

export default Nav