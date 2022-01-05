export default function changeHump(name: string) {
	name = name.replace(/(?<=-)\w/g, search => {
		return search.toUpperCase()
	})
	name = name.replace(/-/gi, '')

	return name
}
