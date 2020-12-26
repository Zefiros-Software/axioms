import { each } from '~/each'

test('array', () => {
    const result: number[] = []
    each([1, 2, 3], (x: number) => result.push(x))
    expect(result).toEqual([1, 2, 3])
})

test('object', () => {
    const result: number[] = []
    const keys: string[] = []
    each({ a: 1, b: 2 }, (value, key) => {
        result.push(value)
        keys.push(key)
    })
    expect(result).toEqual([1, 2])
    expect(keys).toEqual(['a', 'b'])
})
