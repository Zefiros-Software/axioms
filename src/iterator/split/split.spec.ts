import { splitAt } from './split'

test('string', () => {
    expect(splitAt(6, 'hello world!')).toMatchInlineSnapshot(`
        Array [
          Array [
            "h",
            "e",
            "l",
            "l",
            "o",
            " ",
          ],
          Array [
            "w",
            "o",
            "r",
            "l",
            "d",
            "!",
          ],
        ]
    `)
})

test('simple 1', () => {
    expect(splitAt(1, [1, 2, 3])).toMatchInlineSnapshot(`
        Array [
          Array [
            1,
          ],
          Array [
            2,
            3,
          ],
        ]
    `)
})

test('simple 2', () => {
    expect(splitAt(3, [1, 2, 3])).toMatchInlineSnapshot(`
        Array [
          Array [
            1,
            2,
            3,
          ],
          Array [],
        ]
    `)
})

test('over', () => {
    expect(splitAt(4, [1, 2, 3])).toMatchInlineSnapshot(`
        Array [
          Array [
            1,
            2,
            3,
          ],
          Array [],
        ]
    `)
})

test('negative', () => {
    expect(splitAt(-1, [1, 2, 3])).toMatchInlineSnapshot(`
        Array [
          Array [],
          Array [
            1,
            2,
            3,
          ],
        ]
    `)
})

test('zero', () => {
    expect(splitAt(0, [1, 2, 3])).toMatchInlineSnapshot(`
        Array [
          Array [],
          Array [
            1,
            2,
            3,
          ],
        ]
    `)
})

test('simple', () => {
    expect(splitAt(5, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toMatchInlineSnapshot(`
        Array [
          Array [
            1,
            2,
            3,
            4,
            5,
          ],
          Array [
            6,
            7,
            8,
            9,
            10,
          ],
        ]
    `)
})
