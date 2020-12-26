import { fromPairs } from '~/from-pairs'

test('simple', () => {
    expect(fromPairs([['a', 1], ['b', 2]])).toEqual({ a: 1, b: 2 })
})
