import { useSearchParams } from "react-router-dom";
import SearchItem from "../components/SearchItem";

const SearchResult = () => {
	const [params] = useSearchParams()

	return <div className="bg-white mt-2.5 pt-2.5">
		<div className="text-[#f55] text-[18px] pl-4 bg-[#f3f3f3] h-12 leading-[3rem] m-2">搜索"{params.get('keyword')}"结果</div>
		<div className="mx-7 border border-transparent">
			<SearchItem />
		</div>
	</div>
}
export default SearchResult
