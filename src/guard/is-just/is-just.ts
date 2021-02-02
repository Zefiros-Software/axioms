import type { Just, Maybe } from '~/type/maybe'
import { Nothing } from '~/type/maybe'

export function isJust<T>(x: Maybe<T>): x is Just<T> {
    return x !== Nothing
}
