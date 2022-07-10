import Mock from 'mockjs'

import user from './user'
import search from "./search";

const mocks = [
	...user,
    ...search
]

for (const i of mocks) {
	Mock.mock(i.url, i.type, i.response)
}
