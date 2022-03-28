import { Link } from "react-router-dom";

interface ChapterListProps {
	section: string
	chapterList: Array<string>
}

const ChapterList = (props: ChapterListProps) => {
	const {section, chapterList} = props
	return <div>
		<div className="font-bold text-[18px] text-[#323237] pl-4 bg-[#F9F9F9] h-14 leading-[3.5rem]">{section}</div>
		<div className="py-5 flex flex-wrap">
			<Link to="read_1" className="text-[#626267] text-[14px] pl-4 h-10 w-[274px]">第三百六十一章 引导力量</Link>
			<Link to="" className="text-[#626267] text-[14px] pl-4 h-10 w-[274px]">第三百六十一章 引导力量</Link>
			<Link to="" className="text-[#626267] text-[14px] pl-4 h-10 w-[274px]">第三百六十一章 引导力量</Link>
			<Link to="" className="text-[#626267] text-[14px] pl-4 h-10 w-[274px]">第三百六十一章 引导力量</Link>
			<Link to="" className="text-[#626267] text-[14px] pl-4 h-10 w-[274px]">第三百六十一章 引导力量</Link>
			<Link to="" className="text-[#626267] text-[14px] pl-4 h-10 w-[274px]">第三百六十一章 引导力量</Link>
			<Link to="" className="text-[#626267] text-[14px] pl-4 h-10 w-[274px]">第三百六十一章 引导力量</Link>
			<Link to="" className="text-[#626267] text-[14px] pl-4 h-10 w-[274px]">第三百六十一章 引导力量</Link>
			<Link to="" className="text-[#626267] text-[14px] pl-4 h-10 w-[274px]">第三百六十一章 引导力量</Link>
			<Link to="" className="text-[#626267] text-[14px] pl-4 h-10 w-[274px]">第三百六十一章 引导力量</Link>
			<Link to="" className="text-[#626267] text-[14px] pl-4 h-10 w-[274px]">第三百六十一章 引导力量</Link>
		</div>
	</div>
}

export default ChapterList
