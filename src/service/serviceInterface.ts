export interface ResponseState<T> {
	code: number;
	message: string;
	data: T
}

export interface LoginRequestState {
	username: string;
	password: string;
}

export interface LoginResponseDataState {
	token: string
}

export interface UserInfoDataState {
	uuid: string;
	created_at: string;
	nickname: string;
	username: string;
	phone: string;
	portrait: string;
	gender: number;
	email: string;
	integral: number;
	experience: number;
	gold_coin: number;
	monthly_ticket: number;
	login_time: number;
	last_login_time: string;
	last_login_ip: string;
	recommend_book_count: number;
	collect_book_count: number;
	rate_book_count: number;
	comment_book_count: number;
}

export interface AuthorState {
	book_count: number;
	created_at: string;
	name: string;
	title: string;
	uuid: string;
}

export interface CategoryState {
	bookCount: number;
	created_at: string;
	title: string;
	uuid: string;
}

export interface ChapterState {
	uuid: string;
	created_at: string;
	title: string;
	content: string;
	prev_id: string;
	next_id: string;
}

export interface BookState {
	uuid: string;
	created_at: string;
	title: string;
	cover_image: string;
	description: string;
	rate: number;
	rate_people_count: number;
	click_count: number;
	collect_count: number;
	recommend_count: number;
	last_update_time: string;
	book_status: number;
	author: AuthorState;
	category: CategoryState;
	update: ChapterState;
}

export interface ShelfBookState {
	uuid: string;
	created_at: string;
	read_at: ChapterState;
	book: BookState;
	un_read: number;
}

export interface BookReadState {
	bookInfo: BookState;
	chapterInfo: ChapterState;
}

export interface SearchState {
	bookList: Array<BookState>;
}
