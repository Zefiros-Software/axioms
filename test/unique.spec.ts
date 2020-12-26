import { unique } from '~/unique'

test('simple', () => {
    expect(unique([2, 1, 2])).toEqual([2, 1])
})
