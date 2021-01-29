import { concat } from './concat'

test('multiple variadic', () => {
    const foo = concat(['1', '2', '3'], [4, 5, 6], [true, false, true])
    expect(foo).toMatchInlineSnapshot(`
        Array [
          "1",
          "2",
          "3",
          4,
          5,
          6,
          true,
          false,
          true,
        ]
    `)
})

test('multiple variadic', () => {
    const a = ['1', '2', '3']
    const b = [4, 5, 6]
    const c = [true, false, true]
    const foo = concat(a, b, c)
    expect(foo).toMatchInlineSnapshot(`
        Array [
          "1",
          "2",
          "3",
          4,
          5,
          6,
          true,
          false,
          true,
        ]
    `)
})
