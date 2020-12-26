import { indexOf } from '~/index-of'

test('simple', () => {
    expect(indexOf([2, 9, 9], 2)).toEqual(0)
    expect(indexOf([2, 9, 9], 9)).toEqual(1)
    expect(indexOf([1, 2, 1, 2], 2)).toEqual(1)
})

test('use fromIndex', () => {
    expect(indexOf([1, 2, 1, 2], 2, 2)).toEqual(3)
})
