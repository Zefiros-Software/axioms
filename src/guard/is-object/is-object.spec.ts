import { isObject } from '~/guard/is-object'

test('object', () => {
    expect(isObject({})).toEqual(true)
    expect(isObject({ foo: 'bar' })).toEqual(true)
})

test('array', () => {
    expect(isObject([])).toEqual(false)
})

test('function', () => {
    expect(isObject((x: number) => x)).toEqual(false)
})

test('null', () => {
    expect(isObject(null)).toEqual(false)
})

test('undefined', () => {
    expect(isObject(undefined)).toEqual(false)
})
