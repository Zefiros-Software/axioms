import { isArrayBuffer } from '~/is-array-buffer'

test('simple', () => {
    expect(isArrayBuffer(new ArrayBuffer(2))).toBeTruthy()
})

test('null', () => {
    expect(isArrayBuffer(null)).toBeFalsy()
})

test('undefined', () => {
    expect(isArrayBuffer(undefined)).toBeFalsy()
})
