import { counter } from '~/generator/counter'
import { next } from '~/generator/next'
import { ifilter } from '~/iterator/filter'
import { take } from '~/iterator/take'

test('prime', () => {
    function* primes() {
        let xs = counter(2)

        while (true) {
            const prime = next(xs)
            yield prime.right
            xs = ifilter((x) => x % prime.right !== 0, xs)
        }
    }

    expect(take(10, primes())).toMatchInlineSnapshot(`
        Array [
          2,
          3,
          5,
          7,
          11,
          13,
          17,
          19,
          23,
          29,
        ]
    `)
})
