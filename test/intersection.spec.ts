import { intersection } from '~/intersection'

test('simple', () => {
    expect(intersection([2, 1], [2, 3])).toEqual([2])
    expect(intersection([1, 2, 3], [101, 2, 1, 10], [2, 1])).toEqual([1, 2])
})

test('empty', () => {
    expect(intersection([2, 1], [])).toEqual([])
})

test('null', () => {
    expect(intersection([2, 1], [null])).toEqual([])
})

test('undefined', () => {
    expect(intersection([2, 1], [undefined])).toEqual([])
})

test('only empty', () => {
    expect(intersection([])).toEqual([])
})

test('no args', () => {
    expect(() => intersection()).toThrow()
})
