import { flatten } from '~/flatten'

test('simple', () => {
    expect(flatten([1, [2, [3, [4]], 5]])).toEqual([1, 2, [3, [4]], 5])
})

test('simple depth 2', () => {
    expect(flatten([1, [2, [3, [4]], 5]], 2)).toEqual([1, 2, 3, [4], 5])
})
