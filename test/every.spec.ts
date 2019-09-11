import { every } from '~/every'
import { isEmpty } from '~/is-empty'

test('array', () => {
    expect(every([true, 1, null, 'yes'], Boolean)).toEqual(false)
    expect(every([true, false], Boolean)).toEqual(false)
})

test('array objects', () => {
    const users = [{ user: 'barney', age: 36, active: false }, { user: 'fred', age: 40, active: false }]
    expect(every(users, x => x.active)).toEqual(false)
    expect(every(users, x => !x.active)).toEqual(true)
})

test('array empty', () => {
    const users: string[] = []
    expect(every(users, isEmpty)).toEqual(true)
})

test('object', () => {
    expect(every({ a: 1, b: 2 }, value => value > 0)).toEqual(true)
    expect(every({ a: 1, b: 2 }, value => value > 1)).toEqual(false)
    expect(every({ a: 1, b: 2 }, value => value < 0)).toEqual(false)
})
