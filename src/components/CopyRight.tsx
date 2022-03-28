const CopyRight = () => {
	return <div className="mt-2.5 mb-7 flex flex-col items-center">
		<div className="w-full h-2.5 mb-7 bg-[#f55]"/>
		<div className="text-[14px] text-[#929297] leading-7">Copyright © 2019 - {new Date().getFullYear()} DuDuDu. All Rights Reserved . 版权所有DuDuDu</div>
		<div className="text-[14px] text-[#929297] leading-7">本站内容系DuDuDu根据您的指令搜索各大小说站得到的链接列表，不代表DuDuDu赞成被搜索网站的内容或立场</div>
		<div className="text-[14px] text-[#929297] leading-7">如果版权人认为在本站放置您的作品有损您的利益，请发邮件至“10000@qq.com”，本站确认后将会立即删除。</div>
	</div>
}

export default CopyRight
