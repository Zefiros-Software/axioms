import { iqueue } from './queue'

import { take } from '~/iterator/take'

test('simple', () => {
    expect([...iqueue([1, 2, 3, 4])]).toMatchInlineSnapshot(`
        Array [
          1,
          2,
          3,
          4,
        ]
    `)
})

test('continued', () => {
    const q = iqueue([1, 2, 3, 4])
    q.enqueue([5, 6, 7])
    expect(take(3, q)).toMatchInlineSnapshot(`
        Array [
          1,
          2,
          3,
        ]
    `)
    expect(take(2, q)).toMatchInlineSnapshot(`
        Array [
          4,
          5,
        ]
    `)
    expect([...q]).toMatchInlineSnapshot(`
        Array [
          6,
          7,
        ]
    `)
    q.enqueue([5, 6, 7])
    expect([...q]).toMatchInlineSnapshot(`Array []`)
})
