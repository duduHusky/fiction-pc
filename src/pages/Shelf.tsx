import ShelfItem from "../components/ShelfItem"

const Shelf = () => {
	return <div className="bg-white pt-2.5 flex-1">
		<div className="text-[#f55] text-[18px] pl-4 bg-[#f3f3f3] h-12 leading-[3rem] m-2">我的书架<span className="text-[14px] text-[#929297]">(共<span className="text-[#f55]">6</span>本)</span></div>
		<div className="mx-7 border border-transparent">
			<ShelfItem />
		</div>
	</div>
}
export default Shelf
