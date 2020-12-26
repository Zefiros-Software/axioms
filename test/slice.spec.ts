import { slice } from '~/slice'

test('simple', () => {
    expect(slice([1, 2, 3, 4], 1, 3)).toEqual([2, 3])
})

test('simple', () => {
    expect(slice([1, 2, 3, 4], 2, -1)).toEqual([3])
})
