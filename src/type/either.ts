import type { Maybe } from './maybe'
import { Nothing } from './nothing'

import { isJust } from '~/guard/is-just/is-just'
import { isLeft } from '~/guard/is-left/is-left'
import { isRight } from '~/guard/is-right'

export type Left<L> = { left: L }
export type Right<R> = { right: R }
export type Either<L, R> = Left<L> | Right<R>

export function leftToMaybe<L, R>(x: Either<L, R>): Maybe<L> {
    return isLeft(x) ? x.left : Nothing
}

export function rightToMaybe<L, R>(x: Either<L, R>): Maybe<R> {
    return isRight(x) ? x.right : Nothing
}

export function maybeToRight<L, R>(left: L, x: Maybe<R>): Either<L, R> {
    return isJust(x) ? { right: x } : { left }
}

export function maybeToLeft<L, R>(right: R, x: Maybe<L>): Either<L, R> {
    return isJust(x) ? { left: x } : { right }
}
