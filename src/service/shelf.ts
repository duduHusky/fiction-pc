import request from "../utils/request"
import { ResponseState, ShelfBookState } from "./serviceInterface"

export function getShelfBooks() {
	return request.get<null, ResponseState<Array<ShelfBookState>>>("/shelf")
}
