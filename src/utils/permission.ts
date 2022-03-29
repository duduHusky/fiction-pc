import Cookies from "js-cookie";

const TOKEN_NAME = "DuDuDu_Token"

export const hasToken = (): boolean => {
	return !!Cookies.get(TOKEN_NAME)
}

export const getToken = (): string => {
	return Cookies.get(TOKEN_NAME) ?? ""
}
