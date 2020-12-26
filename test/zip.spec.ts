import { zip } from '~/zip'

test('simple', () => {
    expect(zip([1, 2, 3], [1, 2, 3])).toEqual([[1, 1], [2, 2], [3, 3]])
})

test('array argument', () => {
    expect(zip([[1, 2, 3], [1, 2, 3]])).toEqual([[1, 1], [2, 2], [3, 3]])
})

test('zipzip', () => {
    expect(zip(zip([1, 2, 3], [1, 2, 3]))).toEqual([[1, 2, 3], [1, 2, 3]])
})

test('uneven', () => {
    expect(zip([1, 2, 3, 4], [1, 2, 3, 4], [1, 2])).toEqual([[1, 1, 1], [2, 2, 2]])
})

test('strings', () => {
    expect(zip([...'ABCD'], [...'ABCD'], [...'AB'])).toEqual([['A', 'A', 'A'], ['B', 'B', 'B']])
})

test('nothing', () => {
    expect(zip([], [])).toEqual([])
})
