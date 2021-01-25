import { isDefined } from '~/guard/is-defined'

test('isDefined', () => {
    expect(isDefined([])).toBe(true)
    expect(isDefined([1])).toBe(true)
    expect(isDefined(null)).toBe(false)
    expect(isDefined(undefined)).toBe(false)
})
