import { replicate } from '~/array/replicate/replicate'
import { sum } from '~/array/sum'
import { range } from '~/generator/range'

test('pi', () => {
    const approxPi = (n: number): number =>
        (sum(
            replicate(n, () => {
                const x = Math.random()
                const y = Math.random()
                return x * x + y * y < 1 ? 1 : 0
            })
        ) /
            n) *
        4

    expect(range(3, 4).map((x) => approxPi(Math.pow(10, x)))).toMatchInlineSnapshot(`
        Array [
          3.192,
        ]
    `)
})
