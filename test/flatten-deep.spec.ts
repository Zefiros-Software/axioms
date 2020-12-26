import { flattenDeep } from '~/flatten-deep'

test('simple', () => {
    expect(flattenDeep([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5])
})
