import request from "../utils/request"
import { ResponseState, UserInfoDataState } from "./serviceInterface"
import { LoginRequestState, LoginResponseDataState } from "./interface";


export function login(data: LoginRequestState) {
	return request.post<LoginRequestState, ResponseState<LoginResponseDataState>>('/user/login', data)
}

export function getInfo() {
	return request.get<null, ResponseState<UserInfoDataState>>('/user/info')
}
