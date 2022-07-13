import { Link, useParams } from "react-router-dom"
import FontIcons from "../components/FontIcons"
import ChapterList from "../components/ChapterList"
import { useEffect, useState } from "react"
import { addToShelf, getBookChapterList, getBookInfo } from "../service/book"
import { BookState, ChapterState } from "../service/serviceInterface"

type ParamsState = {
	bookId: string;
}

const BookInfo = () => {
	const { bookId } = useParams<ParamsState>()
	const [bookInfo, setBookInfo] = useState<BookState | null>(null)
	const [chapters, setChapters] = useState<ChapterState[]>([])

	const getRate = () => {
		if (bookInfo?.rate && bookInfo.rate_people_count) {
			return bookInfo?.rate / bookInfo?.rate_people_count
		}
		return 0
	}

	const addShelf = async () => {
		if (!bookInfo?.uuid) return
		const res = await addToShelf(bookInfo?.uuid)
		if (res.code > 0) {
			alert(res.message)
			return
		}
		alert("添加成功")
	}

	const getLastChapters = (count: number) => {
		return [...chapters.slice(-count)].reverse()
	}

	useEffect(() => {
		(async () => {
			const res = await getBookInfo(bookId as string)
			const chapters = await getBookChapterList(bookId as string)
			setBookInfo(res.data)
			chapters && setChapters(chapters.data)
		})()
	}, [bookId])

	return <>
		<div className="my-6 pl-5">
			<FontIcons name="house" color="#f55"/>
			<span className="text-[14px] text-[#626267] ml-1">
				<Link title="DuDuDu" to="/" className="mr-1">DuDuDu</Link>
				<FontIcons name="angle-right"/>
				<Link to={`/category/${bookInfo?.category.uuid}`} className="mx-1">{bookInfo?.category.title}</Link>
				<FontIcons name="angle-right"/>
				<Link to="" className="ml-1">{bookInfo?.title}</Link>
			</span>
		</div>
		<div className="flex py-5 pl-5 bg-white">
			<div className="flex flex-1">
				<Link to="/:bookId">
					<img src={bookInfo?.cover_image} alt="" className="mr-7 w-40 h-56"/>
				</Link>
				<div className="flex flex-col flex-1 pr-7 border-r justify-between">
					<div className="flex items-baseline">
						<h1 className="text-[#f55] text-[24px] font-bold mr-5">
							<Link to="/1/" className="color2 bold" title="重生青云路">{bookInfo?.title}</Link>
						</h1>
						<span className="mr-7 text-[#999] text-[14px]">作者：
							<Link to={`/author/${bookInfo?.author.uuid}`}>
							<span className="text-[#626267]">{bookInfo?.author.name}</span>
						</Link>
						</span>
						<span className="text-[#999] text-[14px]">类别：
							<Link to={`/category/${bookInfo?.category.uuid}`} className="color5">
								<span className="text-[#626267]">{bookInfo?.category.title}</span>
							</Link>
						</span>
						<span className="ml-auto text-[#323237] text-[14px]">综合评分 <span
							className="text-[#f55] text-[26px]">{getRate()}</span></span>
					</div>
					<div className="text-[12px] text-[#929292] my-4">
						<p>{bookInfo?.description}</p>
					</div>
					<div className="flex items-baseline">
						<Link title="第三百六十一章 引导力量" to="/1/read_361.html">
							<span className="text-[#f55] mr-5 text-[14px]">第三百六十一章 引导力量</span>
						</Link>
						<span className="text-[12px] text-[#ACACAC]">2021-05-23 08:50:23</span>
					</div>
					<div className="flex mt-4">
						<Link to="/1/read_1.html"
							  className="bg-[#f55] text-white w-24 h-9 leading-9 text-center mr-5 text-[14px]">立即阅读</Link>
						<button
							className="border text-[#929297] w-24 h-9 leading-9 text-center mr-5 text-[14px] hover:text-[#f55] hover:border-[#f55]" onClick={addShelf}>加入收藏
						</button>
						<button
							className="border text-[#929297] w-24 h-9 leading-9 text-center text-[14px] hover:text-[#f55] hover:border-[#f55]">我要推荐
						</button>
					</div>
				</div>
			</div>
			<div className="pl-11 flex flex-col justify-between w-[15.625rem]">
				<div className="">
					<span className="text-[14px] text-[#626267] mr-2.5">点击:</span>
					<span className="text-[14px] text-[#323237]">{bookInfo?.click_count} 次</span>
				</div>
				<div className="">
					<span className="text-[14px] text-[#626267] mr-2.5">收藏:</span>
					<span className="text-[14px] text-[#323237]"><span
						className="num-mark">{bookInfo?.collect_count}</span> 人</span>
				</div>
				<div className="">
					<span className="text-[14px] text-[#626267] mr-2.5">推荐:</span>
					<span className="text-[14px] text-[#323237]"><span
						className="num-vote">{bookInfo?.recommend_count}</span> 人</span>
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
					<span className="text-[14px] text-[#323237]"><span
						className="num-star-people">{bookInfo?.rate_people_count}</span> 人</span>
				</div>
			</div>
		</div>
		<div className="chapter mt-2.5 bg-white p-5">
			<div className="mb-5 text-[18px] text-[#f55] border-b-4	border-b-[#f55]">章节目录</div>
			<div className="content">
				<ChapterList section={"最新章节"} chapterList={getLastChapters(16)} />
				<ChapterList section={"章节列表"} chapterList={chapters}/>
			</div>
			<div className="mb-5 text-[18px] text-[#f55] border-b-4	border-b-[#f55]">评论区</div>
			<div className="content flex flex-col">
				<div className="text-[#f55] pl-4 bg-[#F9F9F9] h-14 leading-[3.5rem]">全部评论(0)条</div>
				<textarea rows={5}
						  className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-2 ring-1 ring-slate-200 shadow-sm mt-7 resize-none"/>
				<button className="h-10 w-24 px-6 rounded-md bg-[#f55] text-white mt-2.5 self-end">发表</button>
			</div>
		</div>
	</>
}

export default BookInfo
