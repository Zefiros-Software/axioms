import { $ } from './composite'

import { curry } from '~/function/curry'
import { take } from '~/iterator/take'

test('simple', () => {
    expect($(curry(take, 1))([2])).toMatchInlineSnapshot(`
        Array [
          2,
        ]
    `)
})
