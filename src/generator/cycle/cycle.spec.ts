import { cycle } from './cycle'

import { take } from '~/iterator/take'

test('simple', () => {
    expect(take(10, cycle([1, 2, 3]))).toMatchInlineSnapshot(`
        Array [
          1,
          2,
          3,
          1,
          2,
          3,
          1,
          2,
          3,
          1,
        ]
    `)
})
