import { concat } from '~/concat'

test('concat two arrays', () => {
    const a = [1, 2, 3]
    const b = [3, 4, 5]
    expect(concat(a, b)).toEqual([1, 2, 3, 3, 4, 5])
})
test('concat multiple arrays', () => {
    const a = [1, 2, 3]
    const b = [3, 4, 5]
    const c = [6]
    expect(concat(a, b, c)).toEqual([1, 2, 3, 3, 4, 5, 6])
})

test('immutable input', () => {
    const a = [1, 2, 3]
    const b = [3, 4, 5]
    expect(concat(a, b)).toEqual([1, 2, 3, 3, 4, 5])
    expect(a).toEqual([1, 2, 3])
    expect(b).toEqual([3, 4, 5])
})

test('concat null', () => {
    const a = [1, 2, 3]
    const b = null
    expect(concat(a, b)).toEqual([1, 2, 3])
    expect(a).toEqual([1, 2, 3])
    expect(b).toEqual(null)
})

test('concat undefined', () => {
    const a = [1, 2, 3]
    const b = undefined
    expect(concat(a, b)).toEqual([1, 2, 3])
    expect(a).toEqual([1, 2, 3])
    expect(b).toEqual(undefined)
})

test('concat undefined null mix', () => {
    const a = [1, 2, 3]
    const b = undefined
    const c = [4, 5]
    expect(concat(a, b, c)).toEqual([1, 2, 3, 4, 5])
    expect(a).toEqual([1, 2, 3])
    expect(b).toEqual(undefined)
})

test('concat to null', () => {
    const a = null
    const b = [1, 2, 3]
    const c = [4, 5]
    expect(concat(a, b, c)).toEqual([1, 2, 3, 4, 5])
    expect(a).toEqual(null)
    expect(b).toEqual([1, 2, 3])
})

test('concat to undefined', () => {
    const a = undefined
    const b = [1, 2, 3]
    const c = [4, 5]
    expect(concat(a, b, c)).toEqual([1, 2, 3, 4, 5])
    expect(a).toEqual(undefined)
    expect(b).toEqual([1, 2, 3])
})

test('concat empty to undefined', () => {
    const a = undefined
    const b: any[] = []
    expect(concat(a, b)).toEqual([])
    expect(a).toEqual(undefined)
    expect(b).toEqual([])
})
