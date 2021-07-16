import './NewUpdate.scss'
import {Link} from 'react-router-dom'

function NewUpdate() {
    return <div className="new-update">
        <div className="update-title">DuDuDu最新更新</div>
        <ul className="update-list">
            <li>
                <Link to="/category/dushi" className="category">[都市]</Link>
                <Link to="/book/id" className="title">大时代中的小农民</Link>
                <Link to="/book/id/read_id" className="chapter-name">第666章 牛逼</Link>
                <Link to="/author/id" className="author">全是</Link>
                <span className="time">07-16 19:50</span>
            </li>
        </ul>
    </div>
}

export default NewUpdate;