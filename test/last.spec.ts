import { last } from '~/last'

test('simple', () => {
    expect(last([1, 2, 3])).toEqual([3])
})

test('first n', () => {
    expect(last([1, 2, 3], 2)).toEqual([2, 3])
})

test('last larger than array', () => {
    expect(last([1, 2, 3], 6)).toEqual([1, 2, 3])
})

test('last negative number', () => {
    expect(last([1, 2, 3], -6)).toEqual([])
})

test('empty', () => {
    expect(last([])).toEqual([])
})

test('undefined', () => {
    expect(last(undefined)).toEqual([])
})

test('null', () => {
    expect(last(null)).toEqual([])
})
