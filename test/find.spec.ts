import { find } from '~/find'

test('simple', () => {
    expect(find([1, 2, 3], x => x === 1)).toEqual(1)
})

test('find object', () => {
    const users = [
        { user: 'barney', age: 36, active: true },
        { user: 'fred', age: 40, active: false },
        { user: 'pebbles', age: 1, active: true },
    ]
    expect(find(users, x => x.age < 40)).toBe(users[0])
})

test('not found object', () => {
    const users = [
        { user: 'barney', age: 36, active: true },
        { user: 'fred', age: 40, active: false },
        { user: 'pebbles', age: 1, active: true },
    ]
    expect(find(users, x => x.age < 0)).toBe(undefined)
})
