import { reverse } from '~/reverse'

test('simple', () => {
    const array = [1, 2, 3]
    expect(reverse(array)).toEqual([3, 2, 1])
})
