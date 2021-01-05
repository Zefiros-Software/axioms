import { filterUndefined } from '~/array/filter-undefined'

test('simple', () => {
    expect(filterUndefined([1, 2, 3])).toEqual([1, 2, 3])
})

test('filter null', () => {
    expect(filterUndefined([1, null, 2, 3])).toEqual([1, 2, 3])
})

test('filter undefined', () => {
    expect(filterUndefined([1, undefined, 2, 3])).toEqual([1, 2, 3])
})

test('do not filter falsey', () => {
    expect(filterUndefined([1, false, 2, 3])).toEqual([1, false, 2, 3])
})

test('empty', () => {
    expect(filterUndefined([])).toEqual([])
})
