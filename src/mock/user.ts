import Mock from "mockjs"

const Random = Mock.Random

export default [
	{
		url: '/user/login',
		type: 'post',
		response: () => {
			return {
				code: 0,
				data: {
					token: Random.string()
				}
			}
		}
	},
	{
		url: '/user/info',
		type: 'get',
		response: () => {
			return {
				code: 0,
				data: {
					name: Random.name(),
					avatar: 'http://f.vtmtea.com/static/image/noavatar.gif'
				}
			}
		}
	}
]
