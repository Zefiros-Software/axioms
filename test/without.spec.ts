import { without } from '~/without'

test('simple', () => {
    expect(without([1, 2, 3], 2)).toEqual([1, 3])
    expect(without([1, 2, 3], 2, 3)).toEqual([1])
    expect(without([1, 2, 3], ...[2, 3])).toEqual([1])
})
