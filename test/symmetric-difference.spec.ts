import { symmetricDifference } from '~/symmetric-difference'

test('simple', () => {
    expect(symmetricDifference([1, 2, 3], [5, 2, 1, 4])).toEqual([3, 5, 4])
    expect(symmetricDifference([2, 1], [2, 3])).toEqual([1, 3])
})
