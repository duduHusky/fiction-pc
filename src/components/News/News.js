import './News.scss'
import {Link} from 'react-router-dom'

function News() {
    return <div className="news">
        <div className="title">
            <div className="title-text">新闻公告</div>
            <Link to="/news" className="more">更多+</Link>
        </div>
        <ul className="list">
            <li>
                <span>[公告]</span>
                <Link to="/news/id">今天网站正式上线了</Link>
            </li>
        </ul>
    </div>
}

export default News;