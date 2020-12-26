export function isObject(obj: object | any): obj is object {
    return obj === Object(obj)
}
