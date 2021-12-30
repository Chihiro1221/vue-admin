import _ from 'lodash'

export function parseEnv(env: Record<string, any>): ViteEnv {
    const copyEnvs = _.cloneDeep(env)
    Object.entries(env).forEach(([key, value]) => {
        if (value === 'true' || value === 'false') env[key] = value === 'true' ? true : false
        else if (/^\d+$/.test(value)) env[key] = Number(value)
        else if (value === 'null') env[key] = null
        else if (value === 'undefined') env[key] = undefined
    })
    return copyEnvs as ViteEnv
}
