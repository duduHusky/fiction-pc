import request from "../utils/request"
import { BookReadState, BookState, ChapterState, ResponseState, SearchState } from "./serviceInterface"

export function getBookInfo(bookId: string) {
	return request.get<string, ResponseState<BookState>>(`/book/info/${bookId}`)
}

export function getBookChapter(chapterId: string) {
	return request.get<string, ResponseState<BookReadState>>(`/book/chapter/${chapterId}`)
}

export function getBookChapterList(bookId: string) {
	return request.get<string, ResponseState<ChapterState[]>>(`/book/chapter-list/${bookId}`)
}

export function getBookSearch(s: string, page: number = 1, size: number = 10) {
	return request.get<string, ResponseState<SearchState>>('/book/search', {
		params: {
			s,
			page,
			size
		}
	})
}

export function addToShelf(bookId: string) {
	return request.post<string, ResponseState<null>>('/shelf/add', { bookId })
}
