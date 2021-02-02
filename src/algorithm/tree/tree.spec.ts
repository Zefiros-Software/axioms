import type { Tree } from './tree'
import { tree, bfs, dfsPostOrder, dfsPreOrder } from './tree'

import { sum } from '~/array/sum'

test('preorder', () => {
    const tree: Tree<number> = {
        value: 1,
        children: [
            {
                value: 2,
                children: [
                    { value: 4, children: [] },
                    { value: 5, children: [] },
                ],
            },
            {
                value: 3,
                children: [
                    { value: 6, children: [] },
                    { value: 7, children: [] },
                ],
            },
        ],
    }

    expect([...dfsPreOrder(tree)]).toMatchInlineSnapshot(`
        Array [
          1,
          3,
          7,
          6,
          2,
          5,
          4,
        ]
    `)
})

test('postorder', () => {
    const tree: Tree<number> = {
        value: 1,
        children: [
            {
                value: 2,
                children: [
                    { value: 4, children: [] },
                    { value: 5, children: [] },
                ],
            },
            {
                value: 3,
                children: [
                    { value: 6, children: [] },
                    { value: 7, children: [] },
                ],
            },
        ],
    }

    expect([...dfsPostOrder(tree)]).toMatchInlineSnapshot(`
        Array [
          4,
          5,
          2,
          6,
          7,
          3,
          1,
        ]
    `)
})

test('bfs', () => {
    const tree: Tree<number> = {
        value: 1,
        children: [
            {
                value: 2,
                children: [
                    { value: 4, children: [] },
                    { value: 5, children: [] },
                ],
            },
            {
                value: 3,
                children: [
                    { value: 6, children: [] },
                    { value: 7, children: [] },
                ],
            },
        ],
    }

    expect([...bfs(tree)]).toMatchInlineSnapshot(`
        Array [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
        ]
    `)
})

test('tree', () => {
    const root = tree(1, [tree(2, [tree(4), tree(5)]), tree(3, [tree(6), tree(7)])])

    expect([...bfs(root)]).toMatchInlineSnapshot(`
        Array [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
        ]
    `)
    expect(sum(bfs(root))).toMatchInlineSnapshot(`28`)
})
