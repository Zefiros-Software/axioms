import { counter } from '~/generator/counter'
import { next } from '~/generator/next'
import { ifilter } from '~/iterator/filter'
import { take } from '~/iterator/take'

test('prime', () => {
    function* primes() {
        let xs = counter(2)

        while (true) {
            const prime = next(xs)
            yield prime
            xs = ifilter((x) => x % prime.right !== 0, xs)
        }
    }

    expect(take(10, primes())).toMatchInlineSnapshot(`
        Array [
          Object {
            "right": 2,
          },
          Object {
            "right": 3,
          },
          Object {
            "right": 5,
          },
          Object {
            "right": 7,
          },
          Object {
            "right": 11,
          },
          Object {
            "right": 13,
          },
          Object {
            "right": 17,
          },
          Object {
            "right": 19,
          },
          Object {
            "right": 23,
          },
          Object {
            "right": 29,
          },
        ]
    `)
})
