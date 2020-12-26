import { union } from '~/union'

test('simple', () => {
    expect(union([1, 2, 3], [4, 3, 2])).toEqual([1, 2, 3, 4])
})

test('order', () => {
    expect(union([2], [1, 2])).toEqual([2, 1])
})

test('order2', () => {
    expect(union([1, 2], [2])).toEqual([1, 2])
})
