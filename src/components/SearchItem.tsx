import { Link } from "react-router-dom";

const SearchItem = () => {
	return <div className="my-5 flex">
		<img src="https://www.xbiquwx.la/files/article/image/80/80275/80275s.jpg" alt="稳住别浪" className="w-20 h-28 mr-7" />
		<div className="flex flex-col justify-between">
			<div className="flex items-baseline">
				<div className="mr-16 text-[#f55] text-[18px]">稳住别浪</div>
				<div className="mr-7 text-[14px]">作者：<Link to="/">跳舞</Link></div>
				<div className="mr-7 text-[14px]">分类：<Link to="/">都市</Link></div>
				<div className="text-[14px] text-[#626267] ml-20">284 人在读</div>
			</div>
			<div className="text-[14px] text-[#626267]">天堂打烊，地狱满员。所以，我留在人间当祸害呀……</div>
			<div className="text-[14px] text-[#999]">最新更新： <Link to="/" className="text-[#f55]">第四百四十四章 【她是你的“锚”】</Link></div>
		</div>
		<div className="flex flex-col justify-around ml-auto">
			<button className="border border-[#f55] text-[#f55] w-24 h-9 leading-9 text-center mr-5 text-[14px]">立即阅读</button>
			<button className="border text-[#929297] w-24 h-9 leading-9 text-center mr-5 text-[14px]">加入收藏</button>
		</div>
	</div>
}

export default SearchItem
