import { isDefined } from '~/guard/is-defined'

test('isDefined', () => {
    expect(isDefined([])).toBeTruthy()
    expect(isDefined([1])).toBeTruthy()
    expect(isDefined(null)).toBeFalsy()
    expect(isDefined(undefined)).toBeFalsy()
})
