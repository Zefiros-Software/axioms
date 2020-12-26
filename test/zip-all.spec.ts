import { zipAll } from '~/zip-all'

test('simple', () => {
    expect(zipAll([1, 2, 3], [1, 2, 3])).toEqual([[1, 1], [2, 2], [3, 3]])
})

test('array argument', () => {
    expect(zipAll([[1, 2, 3], [1, 2, 3]])).toEqual([[1, 1], [2, 2], [3, 3]])
})

test('zipzip', () => {
    expect(zipAll(zipAll([1, 2, 3], [1, 2, 3]))).toEqual([[1, 2, 3], [1, 2, 3]])
})

test('uneven', () => {
    expect(zipAll([1, 2, 3, 4], [1, 2, 3, 4], [1, 2])).toEqual([[1, 1, 1], [2, 2, 2], [3, 3, undefined], [4, 4, undefined]])
})

test('strings', () => {
    expect(zipAll([...'ABCD'], [...'ABCD'], [...'AB'])).toEqual([
        ['A', 'A', 'A'],
        ['B', 'B', 'B'],
        ['C', 'C', undefined],
        ['D', 'D', undefined],
    ])
})

test('nothing', () => {
    expect(zipAll([], [])).toEqual([])
})
