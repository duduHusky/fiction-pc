import Mock from 'mockjs'

import user from './user'

const mocks = [
	...user
]

for (const i of mocks) {
	Mock.mock(i.url, i.type, i.response)
}
