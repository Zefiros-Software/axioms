import { nth } from '~/nth'

test('simple', () => {
    expect(nth([1, 2, 3], 2)).toEqual(3)
})

test('sparse', () => {
    expect(nth([1, undefined, 3], 2)).toEqual(3)
})
