import { some } from '~/some'
import { isEmpty } from '~/is-empty'

test('array', () => {
    expect(some([true, 1, null, 'yes'], Boolean)).toEqual(true)
    expect(some([true, false], Boolean)).toEqual(true)
})

test('array objects', () => {
    const users = [{ user: 'barney', age: 36, active: false }, { user: 'fred', age: 40, active: false }]
    expect(some(users, x => x.active)).toEqual(false)
    expect(some(users, x => !x.active)).toEqual(true)
})

test('array empty', () => {
    const users: string[] = []
    expect(some(users, isEmpty)).toEqual(false)
})

test('object', () => {
    expect(some({ a: 1, b: 2 }, value => value > 0)).toEqual(true)
    expect(some({ a: 1, b: 2 }, value => value > 1)).toEqual(true)
    expect(some({ a: 1, b: 2 }, value => value < 0)).toEqual(false)
})
