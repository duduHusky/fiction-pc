import {useLocation} from 'react-router-dom'
import BookList from '../components/BookList/BookList'

function Search(props) {
    const useQuery = ()=> new URLSearchParams(useLocation().search)
    const query = useQuery()

    const list = [
        {
            id: 1,
            cover: 'https://www.biquwx.la/files/article/image/80/80275/80275s.jpg',
            title: '稳住别浪',
            authorId: 11,
            authorName: '跳舞',
            categoryName: '都市',
            categoryId: 100,
            desc: '天堂打烊，地狱满员。所以，我留在人间当祸害呀……',
            lastUpdateTitle: '第二百七十章 【女皇的决定】',
            lastUpdateId: 200,
            readPeople: 199,
            isCollect: false
        }
    ]

    return <div className="search">
        <BookList title={`搜索"${query.get("query")}"结果`} list={list} />
    </div>
}

export default Search;