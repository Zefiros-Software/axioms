import { isEmpty } from '~/is-empty'

test('null', () => {
    expect(isEmpty(null)).toEqual(true)
})

test('string', () => {
    expect(isEmpty('')).toEqual(true)
    expect(isEmpty('wefwef')).toEqual(false)
})

test('object', () => {
    expect(isEmpty({})).toEqual(true)
    expect(isEmpty({ foo: 'bar' })).toEqual(false)
})

test('array', () => {
    expect(isEmpty([])).toEqual(true)
    expect(isEmpty([1])).toEqual(false)
})

test('Set', () => {
    expect(isEmpty(new Set())).toEqual(true)
    expect(isEmpty([new Set([1, 2])])).toEqual(false)
})

test('Map', () => {
    expect(isEmpty(new Map())).toEqual(true)
    expect(isEmpty([new Map([[1, 2]])])).toEqual(false)
})
