import { filter } from '~/filter'
import { isEmpty } from '~/is-empty'

test('array', () => {
    expect(filter([true, 1, null, 'yes'], Boolean)).toEqual([true, 1, 'yes'])
    expect(filter([true, false], Boolean)).toEqual([true])
})

test('array objects', () => {
    const users = [{ user: 'barney', age: 36, active: false }, { user: 'fred', age: 40, active: false }]
    expect(filter(users, x => x.active)).toEqual([])
    expect(filter(users, x => !x.active)).toEqual([
        { user: 'barney', age: 36, active: false },
        { user: 'fred', age: 40, active: false },
    ])
})

test('array empty', () => {
    const users: string[] = []
    expect(filter(users, isEmpty)).toEqual([])
})

test('object', () => {
    expect(filter({ a: 1, b: 2 }, value => value > 0)).toEqual([1, 2])
    expect(filter({ a: 1, b: 2 }, value => value > 1)).toEqual([2])
    expect(filter({ a: 1, b: 2 }, value => value < 0)).toEqual([])
})
