import { join } from '~/join'

test('simple', () => {
    expect(join([1, 2, 3])).toEqual('1,2,3')
})

test('separator', () => {
    expect(join([1, 2, 3], '--')).toEqual('1--2--3')
})
