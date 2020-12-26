export function isPlainObject(obj: any): obj is { [key: string]: any } {
    return Object.prototype.toString.call(obj) === '[object Object]'
}
