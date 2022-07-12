import { useSearchParams } from "react-router-dom";
import SearchItem from "../components/SearchItem";
import { useEffect, useState } from "react"
import { getBookSearch } from "../service/book"
import { BookState } from "../service/serviceInterface"
import { Skeleton } from "@mui/material";

const SearchResult = () => {
    const [params] = useSearchParams()
    const [books, setBooks] = useState<Array<BookState>>([])

    useEffect(() => {
        (async () => {
            const res = await getBookSearch(params.get("keyword") as string)
            setBooks(res.data.bookList)
        })()
    }, [params])

    return (
        <div className="bg-white mt-2.5 pt-2.5">
            <div
                className="text-[#f55] text-[18px] pl-4 bg-[#f3f3f3] h-12 leading-[3rem] m-2">搜索"{params.get('keyword')}"结果
            </div>
            <div className="mx-7 border border-transparent">
                <>
                    <Skeleton variant="text" />
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="rectangular" width={210} height={118} />
                </>
                {books.map(item => <SearchItem key={item.uuid} book={item}/>)}
            </div>
        </div>
    )
}
export default SearchResult
