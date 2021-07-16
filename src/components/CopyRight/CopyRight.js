import './CopyRight.scss'
import {Link} from 'react-router-dom'

function CopyRight() {
    return <div className="copyright">
        <div className="copyright-line"></div>
        <div className="about-link">
            <Link to="/contact">联系我们</Link>
            <Link to="/employ">申请收录</Link>
            <Link to="/spider">蜘蛛协议</Link>
            <Link to="/privacy">隐私条款</Link>
            <Link to="/disclaimer">免责声明</Link>
            <Link to="/about">关于我们</Link>
        </div>
        <div className="footer-info" style={{marginTop: '28px'}}>
            Copyright © 2016 - {(new Date()).getFullYear()} DuDuDu. All Rights Reserved . 版权所有DuDuDu
        </div>
        <div className="footer-info">本站内容系DuDuDu根据您的指令搜索各大小说站得到的链接列表，不代表DuDuDu赞成被搜索网站的内容或立场</div>
        <div className="footer-info">如果版权人认为在本站放置您的作品有损您的利益，请发邮件至“10000@qq.com”，本站确认后将会立即删除。</div>
    </div>
}

export default CopyRight;