import { isObject } from '~/guard/is-object'

export function mergeDeep<T, U>(target: T, source: U): T | U {
    const output: Record<string, unknown> = Object.assign({}, target)
    if (isObject(target) && isObject(source)) {
        for (const key of Object.keys(source)) {
            if (isObject(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, { [key]: source[key] })
                } else {
                    output[key] = mergeDeep(target[key], source[key])
                }
            } else {
                Object.assign(output, { [key]: source[key] })
            }
        }
    }
    return output as T | U
}
