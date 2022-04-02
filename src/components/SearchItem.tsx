import { Link } from "react-router-dom"
import { BookState } from "../service/serviceInterface"

interface SearchItemProps {
	book: BookState;
}

const SearchItem = (props: SearchItemProps) => {
	const { book } = props

	return <div className="py-5 flex border-t border-[#E9E9E9]">
		<img src={book.cover_image} alt={book.title} className="w-20 h-28 mr-7"/>
		<div className="flex flex-col justify-between">
			<div className="flex items-baseline">
				<div className="mr-16 text-[#f55] text-[18px]"><Link to={`/${book.uuid}`}>{book.title}</Link></div>
				<div className="mr-7 text-[14px]">作者：<Link to={`/author/${book.author.uuid}`}>{book.author.name}</Link></div>
				<div className="mr-7 text-[14px]">分类：<Link to={`/category/${book.category.uuid}`}>{book.category.title}</Link></div>
				<div className="text-[14px] text-[#626267] ml-20">{book.collect_count} 人在读</div>
			</div>
			<div className="text-[14px] text-[#626267]">{book.description}</div>
			<div className="text-[14px] text-[#999]">最新更新：
				{book?.update?.uuid ? <Link to={`/${book.uuid}/read_${book.update.uuid}`} className="text-[#f55]">{book.update.title}</Link> : '暂无'}
			</div>
		</div>
		<div className="flex flex-col justify-around ml-auto">
			<button className="border border-[#f55] text-[#f55] w-24 h-9 leading-9 text-center mr-5 text-[14px]">立即阅读
			</button>
			<button className="border text-[#929297] w-24 h-9 leading-9 text-center mr-5 text-[14px]">加入收藏</button>
		</div>
	</div>
}

export default SearchItem
