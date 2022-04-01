import request from "../utils/request"
import { BookReadState, BookState, ResponseState } from "./serviceInterface"

export function getBookInfo(bookId: string) {
	return request.get<string, ResponseState<BookState>>(`/book/chapter/${bookId}`)
}

export function getBookChapter(chapterId: string) {
	return request.get<string, ResponseState<BookReadState>>(`/book/chapter/${chapterId}`)
}
