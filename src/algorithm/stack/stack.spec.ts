import { istack } from './stack'

import { take } from '~/iterator/take'

test('simple', () => {
    expect([...istack([1, 2, 3, 4])]).toMatchInlineSnapshot(`
        Array [
          1,
          2,
          3,
          4,
        ]
    `)
})

test('continued', () => {
    const q = istack([1, 2, 3, 4])
    q.push([5, 6, 7])
    expect(take(3, q)).toMatchInlineSnapshot(`
        Array [
          5,
          6,
          7,
        ]
    `)
    expect(take(2, q)).toMatchInlineSnapshot(`
        Array [
          1,
          2,
        ]
    `)
    expect([...q]).toMatchInlineSnapshot(`
        Array [
          3,
          4,
        ]
    `)
    q.push([5, 6, 7])
    expect([...q]).toMatchInlineSnapshot(`Array []`)
})

test('continued 2', () => {
    const q = istack([1])
    q.push([2, 3])
    q.push([4, 5])
    q.push([6, 7])

    expect(take(3, q)).toMatchInlineSnapshot(`
        Array [
          6,
          7,
          4,
        ]
    `)
    expect(take(2, q)).toMatchInlineSnapshot(`
        Array [
          5,
          2,
        ]
    `)
    expect([...q]).toMatchInlineSnapshot(`
        Array [
          3,
          1,
        ]
    `)
    q.push([5, 6, 7])
    expect([...q]).toMatchInlineSnapshot(`Array []`)
})
