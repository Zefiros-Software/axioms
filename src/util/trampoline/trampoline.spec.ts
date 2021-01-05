import { trampoline } from './trampoline'

test('non trampoline', () => {
    const sumBelow = (n: number, sum = 0): number => (n === 0 ? sum : sumBelow(n - 1, sum + n))
    expect(() => sumBelow(123456)).toThrow()
})

test('trampoline', () => {
    const sumBelowRec = (n: number, sum = 0) => {
        if (n === 0) {
            return sum
        }
        return () => sumBelowRec(n - 1, sum + n)
    }
    const sumBelow = trampoline(sumBelowRec)
    expect(sumBelow(123456)).toMatchInlineSnapshot(`7620753696`)
})
