import './Featured.scss'
import {Link} from 'react-router-dom'

function Featured() {
    const data = [
        {
            id: 1,
            title: '顶级科学家开局被戏子侮辱',
            cover: 'http://www.ddxsku.com/files/article/image/81/81968/81968s.jpg',
            author: '小阿八',
            authorId: 1,
            desc: '这一消息瞬间刷爆网络。无数的NC粉、自媒体疯狂炒作。咸猪手也很快被人肉出来。他叫刘旭。26岁的顶级科'
        },
        {
            id: 2,
            title: '顶级科学家开局被戏子侮辱',
            cover: 'http://www.ddxsku.com/files/article/image/81/81968/81968s.jpg',
            author: '小阿八',
            authorId: 1,
            desc: '这一消息瞬间刷爆网络。无数的NC粉、自媒体疯狂炒作。咸猪手也很快被人肉出来。他叫刘旭。26岁的顶级科'
        },
        {
            id: 3,
            title: '顶级科学家开局被戏子侮辱',
            cover: 'http://www.ddxsku.com/files/article/image/81/81968/81968s.jpg',
            author: '小阿八',
            authorId: 1,
            desc: '这一消息瞬间刷爆网络。无数的NC粉、自媒体疯狂炒作。咸猪手也很快被人肉出来。他叫刘旭。26岁的顶级科'
        },
        {
            id: 4,
            title: '顶级科学家开局被戏子侮辱',
            cover: 'http://www.ddxsku.com/files/article/image/81/81968/81968s.jpg',
            author: '小阿八',
            authorId: 1,
            desc: '这一消息瞬间刷爆网络。无数的NC粉、自媒体疯狂炒作。咸猪手也很快被人肉出来。他叫刘旭。26岁的顶级科'
        },
        {
            id: 5,
            title: '顶级科学家开局被戏子侮辱',
            cover: 'http://www.ddxsku.com/files/article/image/81/81968/81968s.jpg',
            author: '小阿八',
            authorId: 1,
            desc: '这一消息瞬间刷爆网络。无数的NC粉、自媒体疯狂炒作。咸猪手也很快被人肉出来。他叫刘旭。26岁的顶级科'
        },
        {
            id: 6,
            title: '顶级科学家开局被戏子侮辱',
            cover: 'http://www.ddxsku.com/files/article/image/81/81968/81968s.jpg',
            author: '小阿八',
            authorId: 1,
            desc: '这一消息瞬间刷爆网络。无数的NC粉、自媒体疯狂炒作。咸猪手也很快被人肉出来。他叫刘旭。26岁的顶级科'
        },
    ]

    return <div className="featured">
        <div className="title">DuDuDu站长推荐</div>
        <ul className='list'>
            {
                data.map(item => {
                    return <li key={item.id}>
                        <img src={item.cover} alt="cover" className="cover"/>
                        <div className="info">
                            <Link to={`/book/${item.id}`} className="book-title">{item.title}</Link>
                            <div className="author">
                                <strong>作者:</strong>
                                <Link to={`/author/${item.authorId}`} className="author-text">{item.author}</Link>
                            </div>
                            <div className="desc">{item.desc}</div>
                            <Link to={`/book/${item.id}`} className="to-read">前往阅读>></Link>
                        </div>
                    </li>
                })
            }
        </ul>
    </div>
}

export default Featured