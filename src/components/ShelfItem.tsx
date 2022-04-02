import { Link, useNavigate } from "react-router-dom"
import { BookState, ChapterState } from "../service/serviceInterface"

interface ShelfItemProps {
	read_at: ChapterState;
	book: BookState;
	un_read: number;
}

const ShelfItem = (props: ShelfItemProps) => {
	const navigate = useNavigate()
	const {book, read_at, un_read} = props

	const goRead = () => {
		navigate(`/${book.uuid}/read_${read_at.uuid}`)
	}

	return <div className="my-5 flex">
		<img src={book.cover_image} alt={book.title} className="w-20 h-28 mr-7 self-center" />
		<div className="flex flex-col justify-between">
			<div className="flex items-baseline">
				<div className="mr-16 text-[#f55] text-[18px]"><Link to={`/${book.uuid}`}>{book.title}</Link></div>
				<div className="mr-7 text-[14px]">作者：<Link to={`/author/${book.author.uuid}`}>{book.author.name}</Link></div>
				<div className="mr-7 text-[14px]">分类：<Link to={`/category/${book.category.uuid}`}>{book.category.title}</Link></div>
				<div className="text-[14px] text-[#626267] ml-20"><span className="text-[#f55] font-bold">{un_read}</span> 章未读</div>
			</div>
			<div className="text-[14px] text-[#626267] mt-2 mb-1 line-clamp-2">{book.description}</div>
			<div className="text-[14px] text-[#999]">更新： <Link to={`/${book.uuid}/read_${book.update.uuid}`} className="text-[#f55]">{book.update.title}</Link><span className="text-[12px] ml-5">{book.last_update_time}</span></div>
			<div className="text-[14px] text-[#999]">书签： <Link to={`/${book.uuid}/read_${read_at.uuid}`} className="text-[#f55]">{read_at.title}</Link></div>
		</div>
		<div className="flex flex-col justify-around ml-auto">
			<button className="border border-[#f55] text-[#f55] w-24 h-9 leading-9 text-center mr-5 text-[14px]" onClick={goRead}>继续阅读</button>
			<button className="border text-[#929297] w-24 h-9 leading-9 text-center mr-5 text-[14px]">移出书架</button>
		</div>
	</div>
}

export default ShelfItem
