export function isArrayBuffer(arg: ArrayBuffer | any): arg is ArrayBuffer {
    return arg instanceof ArrayBuffer
}
