import {Link} from 'react-router-dom'
import './RankCo.scss'

function RankCon(props) {
    return <div className="rank-con" style={{width: props.width}}>
        <div className="title">
            <span className="title-text">{props.title}</span>
            { props.showMore && <Link to={props.url} className="more">更多+</Link>}
        </div>
        <ul>
            {
                props.items && props.items.map((item, k) => {
                    return <li key={item.id}>
                        <span className={`no ${k < 3 ? 'isRed' : ''}`}>{k + 1}</span>
                        <Link to={`/book/${item.id}`} className="book-title">{item.title}</Link>
                        <Link to={`/author/${item.authorId}`} className="author">{item.author}</Link>
                    </li>
                })
            }
        </ul>
    </div>
}

RankCon.defaultProps = {
    width: '290px',
    showMore: false
}

export default RankCon;