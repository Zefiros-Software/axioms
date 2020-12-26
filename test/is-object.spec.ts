import { isObject } from '~/is-object'

test('object', () => {
    expect(isObject({})).toEqual(true)
})

test('array', () => {
    expect(isObject([])).toEqual(true)
})

test('function', () => {
    expect(isObject((x: any) => x)).toEqual(true)
})

test('null', () => {
    expect(isObject(null)).toEqual(false)
})

test('undefined', () => {
    expect(isObject(undefined)).toEqual(false)
})
