import * as yup from 'yup'
yup.setLocale({
	mixed: {
		required: '${label}是必须的',
	},
	string: {
		email: '邮箱不是有效的',
	},
	number: {
		min: '${label}}不能少于 ${min} ',
		max: '不能大于 ${max} ',
	},
})

export default yup
