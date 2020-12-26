import { tail } from '~/tail'

test('simple', () => {
    expect(tail([1, 2, 3])).toEqual(3)
})

test('empty', () => {
    expect(tail([])).toEqual(undefined)
})

test('null array', () => {
    expect(tail([null])).toEqual(null)
})

test('null', () => {
    expect(tail(null)).toEqual(undefined)
})

test('undefined', () => {
    expect(tail(undefined)).toEqual(undefined)
})
