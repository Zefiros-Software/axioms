import { enumerate } from './enumerate'

import { irange } from '~/generator/range'

test('simple', () => {
    for (const [i, n] of enumerate(irange(2))) {
        console.log(i, n)
    }
})
