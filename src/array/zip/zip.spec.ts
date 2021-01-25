import { zipWith } from './zip'

import { zip } from '~/array/zip'
import { counter } from '~/generator/counter'

describe('zip', () => {
    test('simple', () => {
        const zipped = zip([1, 2, 3], [1, 2, 3])
        expect(zipped).toEqual([
            [1, 1],
            [2, 2],
            [3, 3],
        ])
    })

    test('array argument', () => {
        expect(zip([1, 2, 3], [1, 2, 3])).toEqual([
            [1, 1],
            [2, 2],
            [3, 3],
        ])
    })

    test('variadic argument', () => {
        expect(zip([1, 2, 3], ['1', '2', '3'])).toEqual([
            [1, '1'],
            [2, '2'],
            [3, '3'],
        ])
    })

    test('zipzip', () => {
        expect(zip(...zip([1, 2, 3], [1, 2, 3]))).toEqual([
            [1, 2, 3],
            [1, 2, 3],
        ])
    })

    test('uneven', () => {
        expect(zip([1, 2, 3, 4], [1, 2, 3, 4], [1, 2])).toEqual([
            [1, 1, 1],
            [2, 2, 2],
        ])
    })

    test('strings', () => {
        expect(zip([...'ABCD'], [...'ABCD'], [...'AB'])).toEqual([
            ['A', 'A', 'A'],
            ['B', 'B', 'B'],
        ])
    })

    test('with generator', () => {
        expect(zip([...'ABCD'], [...'ABCD'], [...'AB'], counter())).toEqual([
            ['A', 'A', 'A', 0],
            ['B', 'B', 'B', 1],
        ])
    })

    test('with multiple finite generators', () => {
        function* foo() {
            yield 1
            yield 2
            yield 3
        }

        function* bar() {
            yield 'a'
            yield 'b'
        }
        //, counter()
        expect(zip(foo(), bar(), [1, 2])).toEqual([
            [1, 'a', 1],
            [2, 'b', 2],
        ])
    })

    test('nothing', () => {
        expect(zip([], [])).toEqual([])
    })
})

describe('zipWith', () => {
    const add = (a: number, b: number) => a + b

    test('simple', () => {
        expect(zipWith(add, [1, 2, 3], [3, 2, 1])).toMatchInlineSnapshot(`
            Array [
              4,
              4,
              4,
            ]
        `)
    })
})
