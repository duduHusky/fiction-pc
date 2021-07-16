import './TopList.scss'
import {NavLink, useRouteMatch} from 'react-router-dom'

function TopList() {
    let {url} = useRouteMatch()

    return <div className="top-list">
        <div className="title">人气榜单</div>
        <div className="top-list-item">
            <NavLink to={`${url}/baidu`} activeClassName="active">百度热搜榜</NavLink>
            <NavLink to={`${url}/zhuishu`} activeClassName="active">追书热度榜</NavLink>
            <NavLink to={`${url}/shuqi`} activeClassName="active">书旗热搜榜</NavLink>
            <NavLink to={`${url}/zhangyue`} activeClassName="active">掌阅热销榜</NavLink>
            <NavLink to={`${url}/qidian`} activeClassName="active">起点月票榜</NavLink>
            <NavLink to={`${url}/17k`} activeClassName="active">17k鲜花榜</NavLink>
        </div>
    </div>
}

export default TopList;