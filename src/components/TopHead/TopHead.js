import {Input, Button} from 'antd'
import {SearchOutlined, UserOutlined, DatabaseOutlined, HistoryOutlined} from '@ant-design/icons'

import './TopHead.scss'
import {Link} from 'react-router-dom'

const {Search} = Input

function TopHead() {

    const onSearch = (value) => {
        if(!value) return false
        console.log(value)
    }

    const searchButton = (
        <Button type="primary" icon={<SearchOutlined/>} danger />
    )

    return <div className="top-head">
        <div className="head">
            <img src="/logo.png" alt="logo" className="logo"/>
            <div className="search-box">
                <Search placeholder="请输入您要搜索的书名" size="middle" onSearch={onSearch} enterButton={searchButton} allowClear />
            </div>
            <ul className="head-list">
                <li>
                    <UserOutlined style={{marginRight: '7px', color: '#F55', fontSize: '16px'}} />
                    <Link to="/user" className="color-red user">Admin</Link>
                    <Link to="/recharge" className="color-red">充值</Link>
                </li>
                <li>
                    <DatabaseOutlined style={{marginRight: '7px', fontSize: '16px'}} />
                    <Link to="/shelf" className="color-grey">我的书架</Link>
                </li>
                <li>
                    <HistoryOutlined style={{marginRight: '7px', fontSize: '16px'}} />
                    <Link to="/history" className="color-grey">阅读历史</Link>
                </li>
            </ul>
        </div>
    </div>
}

export default TopHead