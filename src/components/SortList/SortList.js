import './SortList.scss'
import {NavLink, useRouteMatch} from 'react-router-dom'

function SortList() {
    let {url} = useRouteMatch()

    return <div className="sort-list">
        <div className="title">站内榜单</div>
        <div className="top-list-item">
            <NavLink to={`${url}/all-visit`} activeClassName="active">总点击</NavLink>
            <NavLink to={`${url}/mouth-visit`} activeClassName="active">月点击</NavLink>
            <NavLink to={`${url}/week-visit`} activeClassName="active">周点击</NavLink>
            <NavLink to={`${url}/day-visit`} activeClassName="active">日点击</NavLink>
            <NavLink to={`${url}/vote`} activeClassName="active">推荐数</NavLink>
            <NavLink to={`${url}/mark`} activeClassName="active">收藏数</NavLink>
            <NavLink to={`${url}/download`} activeClassName="active">下载数</NavLink>
            <NavLink to={`${url}/comment`} activeClassName="active">评论数</NavLink>
            <NavLink to={`${url}/score`} activeClassName="active">评分</NavLink>
            <NavLink to={`${url}/postdate`} activeClassName="active">入库时间</NavLink>
        </div>
    </div>
}

export default SortList;