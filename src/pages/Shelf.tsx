import ShelfItem from "../components/ShelfItem"
import { useEffect, useState } from "react"
import { getShelfBooks } from "../service/shelf"
import { ResponseState, ShelfBookState } from "../service/serviceInterface"

const Shelf = () => {
	const [shelfBooks, setShelfBooks] = useState<ShelfBookState[]>([])

	useEffect(() => {
		(async () => {
			const res: ResponseState<Array<ShelfBookState>> = await getShelfBooks()
			setShelfBooks(res.data)
		})()
	}, [])

	return <div className="bg-white pt-2.5 flex-1">
		<div className="text-[#f55] text-[18px] pl-4 bg-[#f3f3f3] h-12 leading-[3rem] m-2">我的书架<span className="text-[14px] text-[#929297]">(共<span className="text-[#f55]">{shelfBooks.length}</span>本)</span></div>
		<div className="mx-7 border border-transparent">
			{shelfBooks.map(shelfBook => <ShelfItem key={shelfBook.uuid} read_at={shelfBook.read_at} book={shelfBook.book} un_read={shelfBook.un_read} />)}
		</div>
	</div>
}
export default Shelf
