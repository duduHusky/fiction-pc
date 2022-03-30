import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UserInfo {
	name: string;
	avatar: string;
}

interface UserState {
	token: string;
	info: UserInfo;
}

const initialState: UserState = {
	token: "",
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

export default userSlice.reducer
