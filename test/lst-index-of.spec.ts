import { lastIndexOf } from '~/last-index-of'

test('simple', () => {
    expect(lastIndexOf([2, 9, 9, 4, 3, 6], 9)).toEqual(2)
    expect(lastIndexOf([2, 9, 9], 2)).toEqual(0)
    expect(lastIndexOf([2, 9, 9], 9)).toEqual(2)
    expect(lastIndexOf([1, 2, 1, 2], 2)).toEqual(3)
})

test('use fromIndex', () => {
    expect(lastIndexOf([1, 2, 1, 2], 2, 2)).toEqual(1)
})
