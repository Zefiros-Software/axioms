import { span } from './span'

test('simple', () => {
    expect(span((x) => x < 3, [1, 2, 3, 4, 5, 1, 2, 3])).toMatchInlineSnapshot(`
        Array [
          Array [
            1,
            2,
          ],
          Array [
            3,
            4,
            5,
            1,
            2,
            3,
          ],
        ]
    `)
})

test('all', () => {
    expect(span((x) => x < 9, [1, 2, 3])).toMatchInlineSnapshot(`
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

test('none', () => {
    expect(span((x) => x < 0, [1, 2, 3])).toMatchInlineSnapshot(`
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
