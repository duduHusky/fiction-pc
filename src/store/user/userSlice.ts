import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../index"

interface UserInfo {
	name: string;
	avatar: string;
}

interface UserState {
	token: string;
	isLogin: boolean;
	info: UserInfo;
}

const initialState: UserState = {
	token: "",
	isLogin: false,
	info: {
		avatar: "",
		name: "",
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
		setInfo: (state, action: PayloadAction<UserInfo>) => {
			state.info = {
				...state.info,
				avatar: action.payload.avatar,
				name: action.payload.name
			}
		}
	}
})

export const { setToken, setInfo } = userSlice.actions

export const selectUserState = (state: RootState) => state.user

export default userSlice.reducer
