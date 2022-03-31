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
