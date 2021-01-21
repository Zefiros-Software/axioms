import { take, takeWhile } from './take'

import { repeat } from '~/generator/repeat'
import { irange, range } from '~/generator/range'

describe('take', () => {
    test('string', () => {
        expect(take(5, 'hello world!')).toMatchInlineSnapshot(`
        Array [
          "h",
          "e",
          "l",
          "l",
          "o",
        ]
    `)
    })

    test('short', () => {
        expect(take(6, [1, 2])).toMatchInlineSnapshot(`
        Array [
          1,
          2,
        ]
    `)
    })

    test('empty', () => {
        expect(take(6, [])).toMatchInlineSnapshot(`Array []`)
    })

    test('negative', () => {
        expect(take(-1, [1, 2])).toMatchInlineSnapshot(`Array []`)
    })

    test('zero', () => {
        expect(take(0, [1, 2])).toMatchInlineSnapshot(`Array []`)
    })

    test('simple', () => {
        expect(take(5, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toMatchInlineSnapshot(`
        Array [
          1,
          2,
          3,
          4,
          5,
        ]
    `)
    })

    test('repeat', () => {
        expect(take(5, repeat('foo'))).toMatchInlineSnapshot(`
        Array [
          "foo",
          "foo",
          "foo",
          "foo",
          "foo",
        ]
    `)
    })
})

describe('takeWhile', () => {
    test('simple', () => {
        expect(takeWhile((x) => x < 3, [1, 2, 3, 4, 5, 1, 2, 3])).toMatchInlineSnapshot(`
            Array [
              1,
              2,
            ]
        `)
    })

    test('all', () => {
        expect(takeWhile((x) => x < 9, [1, 2, 3])).toMatchInlineSnapshot(`
            Array [
              1,
              2,
              3,
            ]
        `)
    })

    test('none', () => {
        expect(takeWhile((x) => x < 0, [1, 2, 3])).toMatchInlineSnapshot(`Array []`)
    })

    test('large size', () => {
        expect(takeWhile((x) => x < 32700, irange(32768))).toEqual(range(32700))
    })

    test('vs for loop', () => {
        const arr = []
        for (const x of irange(32768)) {
            if (x >= 32700) {
                break
            }
            arr.push(x)
        }
        expect(arr).toEqual(range(32700))
    })
})
