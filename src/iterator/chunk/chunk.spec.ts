import { ichunk } from './chunk'

import { chunk } from '~/iterator/chunk'
import { irange, range } from '~/generator/range'

test('simple chunk function', () => {
    expect(chunk(1, [1, 2, 3, 4, 5])).toEqual([[1], [2], [3], [4], [5]])
})

test('simple chunk function, other offset 3', () => {
    expect(chunk(3, [1, 2, 3, 4, 5])).toEqual([
        [1, 2, 3],
        [4, 5],
    ])
})

test('simple chunk function, other offset 5', () => {
    expect(chunk(5, [1, 2, 3, 4, 5])).toEqual([[1, 2, 3, 4, 5]])
})

test('simple chunk function larger than array', () => {
    expect(chunk(10, [1, 2, 3, 4, 5])).toEqual([[1, 2, 3, 4, 5]])
})

test('simple chunk function offset 0', () => {
    expect(chunk(0, [1, 2, 3, 4, 5])).toEqual([[1], [2], [3], [4], [5]])
})

test('simple chunk function offset negative', () => {
    expect(chunk(-5, [1, 2, 3, 4, 5])).toEqual([[1], [2], [3], [4], [5]])
})

test('readonly interface', () => {
    const arr: readonly number[] = [1, 2, 3, 4, 5]
    const chunks = chunk(5, arr)
    // @ts-expect-error test immutability
    chunks[0][0] = []
})

test('tco', () => {
    expect([...ichunk(3, irange(32768))].flat()).toEqual(range(32768))
})

test('tco 2', () => {
    expect(chunk(3, range(32768)).flat()).toEqual(range(32768))
})
