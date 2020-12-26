import { isPlainObject } from '~/is-plain-object'

test('object', () => {
    expect(isPlainObject({})).toEqual(true)
})

test('array', () => {
    expect(isPlainObject([])).toEqual(false)
})

test('function', () => {
    expect(isPlainObject((x: any) => x)).toEqual(false)
})

test('null', () => {
    expect(isPlainObject(null)).toEqual(false)
})

test('undefined', () => {
    expect(isPlainObject(undefined)).toEqual(false)
})
