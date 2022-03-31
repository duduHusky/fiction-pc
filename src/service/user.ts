import request from "../utils/request"
import { LoginRequestState, LoginResponseDataState, ResponseState, UserInfoDataState } from "./serviceInterface"


export function login(data: LoginRequestState) {
	return request.post<LoginRequestState, ResponseState<LoginResponseDataState>>('/user/login', data)
}

export function getInfo() {
	return request.get<null, ResponseState<UserInfoDataState>>('/user/info')
}
