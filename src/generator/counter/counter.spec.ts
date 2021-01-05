import { counter } from './counter'

import { range } from '~/generator/range'
import { take } from '~/iterator/take'

test('simple', () => {
    expect(take(10, counter())).toEqual(range(10))
})
