interface IData {
	expire?: number
	token: string
	[key: string]: any
}
export default {
	set(key: string, IData: IData): void {
		if (IData.expire) {
			IData.expire = new Date().getTime() + IData.expire * 1000
		}
		localStorage.setItem(key, JSON.stringify(IData))
	},
	get(key: string): IData | null {
		let item = localStorage.getItem(key)
		if (item) {
			const data = JSON.parse(item) as IData
			const expire = data?.expire!
			if (expire < new Date().getTime()) {
				localStorage.removeItem(key)
				return null
			}
			return data
		}
		return null
	},
}
