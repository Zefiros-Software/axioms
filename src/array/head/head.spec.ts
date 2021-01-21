import { head } from './head'

test('simple', () => {
    expect(head([1, 2, 3])).toMatchInlineSnapshot(`1`)
})
