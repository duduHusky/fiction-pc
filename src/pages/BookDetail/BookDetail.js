import { Breadcrumb } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
import {useParams} from 'react-router-dom'
import './BookDetail.scss'
import BookInfo from '../../components/BookInfo/BookInfo'

function BookDetail() {
    let {bookId} = useParams()
    console.log(bookId)
    return <div className="book-detail">
        <div className="breadcrumb">
            <Breadcrumb separator=">">
                <Breadcrumb.Item href="">
                    <HomeOutlined />
                    <span>首页</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item href="">
                    <span>都市</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>稳住别浪</Breadcrumb.Item>
            </Breadcrumb>
        </div>
        <BookInfo/>
    </div>
}

export default BookDetail;