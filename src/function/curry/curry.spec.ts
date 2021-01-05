import { curry } from './curry'

test('simple', () => {
    const foo = (x: string, y: number, z: boolean) => z
    const f = curry(foo, 'hello', 2)
    expect(f(true)).toMatchInlineSnapshot(`true`)
})
