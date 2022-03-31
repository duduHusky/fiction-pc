import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../index"
import { UserInfoDataState } from "../../service/serviceInterface"

interface UserState {
	token: string;
	isLogin: boolean;
	info: UserInfoDataState;
}

const initialState: UserState = {
	token: "",
	isLogin: false,
	info: {
		uuid: '',
		created_at: '',
		nickname: '',
		username: '',
		phone: '',
		portrait: '',
		gender: 0,
		email: '',
		integral: 0,
		experience: 0,
		gold_coin: 0,
		monthly_ticket: 0,
		login_time: 0,
		last_login_time: '',
		last_login_ip: '',
		recommend_book_count: 0,
		collect_book_count: 0,
		rate_book_count: 0,
		comment_book_count: 0,
	}
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload
			state.isLogin = true
		},
		setInfo: (state, action: PayloadAction<UserInfoDataState>) => {
			state.info = {
				...action.payload
			}
		}
	}
})

export const { setToken, setInfo } = userSlice.actions

export const selectUserState = (state: RootState) => state.user

export default userSlice.reducer
