import { gmap } from '../map'
import { mapAccumL } from './map-accum'

test('simple', () => {
    const ml = mapAccumL((a, b) => [a, a * b], 5, [9, 6, 3])

    expect([...gmap(ml)]).toMatchInlineSnapshot(`
        Array [
          Object {
            "right": 45,
          },
          Object {
            "right": 30,
          },
          Object {
            "right": 15,
          },
          Object {
            "left": 5,
          },
        ]
    `)
})
