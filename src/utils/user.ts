import Cookies from "js-cookie";

export const hasToken = (): boolean => {
	return !!Cookies.get("DuDuDu_Token")
}
