import type { Just } from '~/type/just'
import type { Maybe } from '~/type/maybe'
import { Nothing } from '~/type/nothing'

export function isJust<T>(x: Maybe<T>): x is Just<T> {
    return x !== Nothing
}
