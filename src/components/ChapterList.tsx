import { Link } from "react-router-dom";
import { ChapterState } from "../service/serviceInterface"

interface ChapterListProps {
	section: string;
	chapterList: Array<ChapterState>;
}

const ChapterList = (props: ChapterListProps) => {
	const {section, chapterList} = props
	return <div>
		<div className="font-bold text-[18px] text-[#323237] pl-4 bg-[#F9F9F9] h-14 leading-[3.5rem]">{section}</div>
		<div className="py-5 flex flex-wrap">
			{
				chapterList.map(item => <Link key={item.uuid} to={`read_${item.uuid}`} className="text-[#626267] text-[14px] pl-4 h-10 w-[274px]">{item.title}</Link>)
			}
		</div>
	</div>
}

export default ChapterList
