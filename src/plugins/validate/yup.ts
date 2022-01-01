import * as yup from 'yup'
yup.setLocale({
	mixed: {
		required: '${label}是必须的',
	},
	string: {
		email: '邮箱不是有效的',
	},
})

export default yup
