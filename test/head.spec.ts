import { head } from '~/head'

test('simple', () => {
    expect(head([1, 2, 3])).toEqual(1)
})

test('empty', () => {
    expect(head([])).toEqual(undefined)
})

test('null array', () => {
    expect(head([null])).toEqual(null)
})

test('null', () => {
    expect(head(null)).toEqual(undefined)
})

test('undefined', () => {
    expect(head(undefined)).toEqual(undefined)
})
