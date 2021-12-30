import _ from 'lodash'
class Helper {
    public env = {} as ImportMetaEnv
    constructor() {
        this.env = this.getEnv()
    }
    private getEnv(): ImportMetaEnv {
        const env: any = _.cloneDeep(import.meta.env)
        Object.entries(import.meta.env as Record<string, any>).forEach(([key, value]) => {
            if (value === 'true' || value === 'false') env[key] = value === 'true' ? true : false
            else if (/^\d+$/.test(value)) env[key] = Number(value)
            else if (value === 'null') env[key] = null
            else if (value === 'undefined') env[key] = undefined
        })
        return env
    }
}

const helper = new Helper()
const env = helper.env
export { env }
