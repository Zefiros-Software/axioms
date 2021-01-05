import { identity } from '~/util/identity'

test('self', () => {
    expect(identity(1)).toEqual(1)
    expect(identity('1')).toEqual('1')
    expect(identity({ '1': 2 })).toEqual({ '1': 2 })
})
