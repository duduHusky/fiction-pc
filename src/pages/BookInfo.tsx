import { Link } from "react-router-dom";
import FontIcons from "../components/FontIcons";
import ChapterList from "../components/ChapterList";

const BookInfo = () => {
	return <>
		<div className="my-6">
			<FontIcons name="house" color="#f55"/>
			<span className="text-[14px] text-[#626267] ml-1">
				<Link title="DuDuDu" to="/" className="mr-1">DuDuDu</Link>
				<FontIcons name="angle-right"/>
				<Link title="都市" to="/category/dushi.html" className="mx-1">都市</Link>
				<FontIcons name="angle-right"/>
				<Link title="重生青云路" to="/1/" className="ml-1">重生青云路</Link>
			</span>
		</div>
		<div className="flex py-5 pl-5 bg-white">
			<div className="flex">
				<Link to="/:bookId">
					<img src="http://www.ddxsku.com/files/article/image/76/76627/76627s.jpg" alt=""
						 className="mr-7 w-40 h-56"/>
				</Link>
				<div className="flex flex-col flex-1 pr-7 border-r justify-between">
					<div className="flex items-baseline">
						<h1 className="text-[#f55] text-[24px] font-bold mr-5">
							<Link to="/1/" className="color2 bold" title="重生青云路">重生青云路</Link>
						</h1>
						<span className="mr-7 text-[#999] text-[14px]">作者：
							<Link title="灵茶树" to="/author/LingChaShu.html">
							<span className="text-[#626267]">灵茶树</span>
						</Link>
						</span>
						<span className="text-[#999] text-[14px]">类别：
							<Link title="都市" to="/category/dushi.html" className="color5">
								<span className="text-[#626267]">都市</span>
							</Link>
						</span>
						<span className="ml-auto text-[#323237] text-[14px]">综合评分 <span className="text-[#f55] text-[26px]">3.5</span></span>
					</div>
					<div className="text-[12px] text-[#929292] my-4">
						<p>历史的车轮滚滚向前，顺则昌，逆则亡。魏乾阳重生回到了1991年，面对着即将到来的新时代，上辈子混迹官场，带着不甘，带着希望再次选择了仕途的发展。站在最正确的一方，把握住时代赋予的每一次机遇，为家，为国，不一样的人生变得精彩万分……</p>
					</div>
					<div className="flex">
						<Link title="第三百六十一章 引导力量" to="/1/read_361.html">
							<span className="text-[#f55] mr-5 text-[14px]">第三百六十一章 引导力量</span>
						</Link>
						<span className="text-[12px] text-[#ACACAC]">2021-05-23 08:50:23</span>
					</div>
					<div className="flex mt-4">
						<Link to="/1/read_1.html" className="bg-[#f55] text-white w-24 h-9 leading-9 text-center mr-5 text-[14px]">立即阅读</Link>
						<button className="border text-[#929297] w-24 h-9 leading-9 text-center mr-5 text-[14px] hover:text-[#f55] hover:border-[#f55]">加入收藏</button>
						<button className="border text-[#929297] w-24 h-9 leading-9 text-center text-[14px] hover:text-[#f55] hover:border-[#f55]">我要推荐</button>
					</div>
				</div>
			</div>
			<div className="pl-11 flex flex-col justify-between w-[15.625rem]">
				<div className="">
					<span className="text-[14px] text-[#626267] mr-2.5">点击:</span>
					<span className="text-[14px] text-[#323237]">8 次</span>
				</div>
				<div className="">
					<span className="text-[14px] text-[#626267] mr-2.5">收藏:</span>
					<span className="text-[14px] text-[#323237]"><span className="num-mark">0</span> 人</span>
				</div>
				<div className="">
					<span className="text-[14px] text-[#626267] mr-2.5">推荐:</span>
					<span className="text-[14px] text-[#323237]"><span className="num-vote">0</span> 人</span>
				</div>
				<div className="">
					<span className="text-[14px] text-[#626267] mr-2.5">字数:</span>
					<span className="text-[14px] text-[#323237]">117.3万</span>
				</div>
				<div className="">
					<span className="text-[14px] text-[#626267] mr-2.5">我要评分:</span>
					<span className="pt-photo"></span>
				</div>
				<div className="">
					<span className="text-[14px] text-[#626267] mr-2.5">参评人数:</span>
					<span className="text-[14px] text-[#323237]"><span className="num-star-people">0</span> 人</span>
				</div>
			</div>
		</div>
		<div className="chapter mt-2.5 bg-white p-5">
			<div className="mb-5 text-[18px] text-[#f55] border-b-4	border-b-[#f55]">章节目录</div>
			<div className="content">
				<ChapterList section={"最新章节"} chapterList={[]} />
				<ChapterList section={"章节列表"} chapterList={[]} />
			</div>
		</div>
	</>
}

export default BookInfo
