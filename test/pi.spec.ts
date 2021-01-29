import { counter } from '~/generator/counter'
import { irange, range } from '~/generator/range'
import { foldl } from '~/iterator/fold'

test('pi', () => {
    const approxPi = (n: number): number =>
        (foldl(
            (a) => {
                const x = Math.random()
                const y = Math.random()
                return x * x + y * y < 1 ? a + 1 : a
            },
            0,
            irange(n)
        ) /
            n) *
        4

    expect(range(3, 4).map((x) => approxPi(Math.pow(10, x)))).toMatchInlineSnapshot(`
        Array [
          3.192,
        ]
    `)
})
