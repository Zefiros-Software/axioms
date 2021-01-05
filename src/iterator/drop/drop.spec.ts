import { drop, dropWhile } from './drop'

describe('drop', () => {
    test('string', () => {
        expect(drop(6, 'hello world!')).toMatchInlineSnapshot(`
              Array [
                "w",
                "o",
                "r",
                "l",
                "d",
                "!",
              ]
      `)
    })

    test('short', () => {
        expect(drop(6, [1, 2])).toMatchInlineSnapshot(`Array []`)
    })

    test('negative', () => {
        expect(drop(-1, [1, 2])).toMatchInlineSnapshot(`
                    Array [
                      1,
                      2,
                    ]
            `)
    })

    test('zero', () => {
        expect(drop(0, [1, 2])).toMatchInlineSnapshot(`
                    Array [
                      1,
                      2,
                    ]
            `)
    })

    test('simple', () => {
        expect(drop(5, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toMatchInlineSnapshot(`
                    Array [
                      6,
                      7,
                      8,
                      9,
                      10,
                    ]
            `)
    })
})

describe('dropWhile', () => {
    test('simple', () => {
        expect(dropWhile((x) => x < 3, [1, 2, 3, 4, 5, 1, 2, 3])).toMatchInlineSnapshot(`
            Array [
              3,
              4,
              5,
              1,
              2,
              3,
            ]
        `)
    })

    test('all', () => {
        expect(dropWhile((x) => x < 9, [1, 2, 3])).toMatchInlineSnapshot(`Array []`)
    })

    test('none', () => {
        expect(dropWhile((x) => x < 0, [1, 2, 3])).toMatchInlineSnapshot(`
            Array [
              1,
              2,
              3,
            ]
        `)
    })
})
