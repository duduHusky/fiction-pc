import Mock from 'mockjs'

import user from './user'
import search from "./search";
import book from "./book";

const mocks = [
	...user,
    ...search,
	...book
]

for (const i of mocks) {
	Mock.mock(i.url, i.type, i.response)
}
