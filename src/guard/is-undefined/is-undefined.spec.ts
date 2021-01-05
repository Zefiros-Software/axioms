import { isUndefined } from '~/guard/is-undefined'

test('undefined', () => {
    expect(isUndefined(undefined)).toEqual(true)
})

test('null', () => {
    expect(isUndefined(null!)).toEqual(false)
})

test('void', () => {
    expect(isUndefined(void 0)).toEqual(true)
})
