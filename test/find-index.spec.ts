import { findIndex } from '~/find-index'

test('simple', () => {
    expect(findIndex([1, 2, 3], x => x === 1)).toEqual(0)
})

test('find object', () => {
    const users = [
        { user: 'barney', age: 36, active: true },
        { user: 'fred', age: 40, active: false },
        { user: 'pebbles', age: 1, active: true },
    ]
    expect(findIndex(users, x => x.age < 40)).toBe(0)
})

test('find object2', () => {
    const users = [
        { user: 'fred', age: 40, active: false },
        { user: 'barney', age: 36, active: true },
        { user: 'pebbles', age: 1, active: true },
    ]
    expect(findIndex(users, x => x.age < 40)).toBe(1)
})

test('not found object', () => {
    const users = [
        { user: 'barney', age: 36, active: true },
        { user: 'fred', age: 40, active: false },
        { user: 'pebbles', age: 1, active: true },
    ]
    expect(findIndex(users, x => x.age < 0)).toBe(-1)
})
