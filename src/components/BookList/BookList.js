import './BookList.scss'
import BookItem from '../BookItem/BookItem'
import {Empty} from 'antd'

function BookList(props) {
    return <div className="book-list">
        <div className="title">{props.title}</div>
        {props.list.length ? props.list.map(item => <BookItem key={item.id} item={item} />) : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="暂无数据" />}
    </div>
}

BookList.defaultProps = {
    title: '',
    list: []
}

export default BookList;