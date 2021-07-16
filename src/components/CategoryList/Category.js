import './Category.scss'
import {Link} from 'react-router-dom'

function Category() {
    return <div className="category">
        <div className="title">作品分类</div>
        <ul className="category-list">
            <li>
                <Link to="/category/id">
                    <span className="name">玄幻</span>
                    <span className="count">4243</span>
                </Link>
            </li>
            <li>
                <Link to="/category/id">
                    <span className="name">玄幻</span>
                    <span className="count">4243</span>
                </Link>
            </li>
            <li>
                <Link to="/category/id">
                    <span className="name">玄幻</span>
                    <span className="count">4243</span>
                </Link>
            </li>
            <li>
                <Link to="/category/id">
                    <span className="name">玄幻</span>
                    <span className="count">4243</span>
                </Link>
            </li>
            <li>
                <Link to="/category/id">
                    <span className="name">玄幻</span>
                    <span className="count">4243</span>
                </Link>
            </li>
        </ul>
    </div>
}

export default Category;