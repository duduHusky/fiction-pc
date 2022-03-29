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
	}
]
