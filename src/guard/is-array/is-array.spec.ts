import { isArray } from '~/guard/is-array'

test('simple', () => {
    expect(isArray([])).toBeTruthy()
})

test('simple', () => {
    const array = [2, 3]
    expect(isArray(array)).toBeTruthy()
})

test('not array', () => {
    expect(isArray(2)).toBeFalsy()
})

test('null', () => {
    expect(isArray(null)).toBeFalsy()
})

test('undefined', () => {
    expect(isArray(undefined)).toBeFalsy()
})
