import type { Either, Right } from '~/type/either'

export function isRight<L, R>(x: Either<L, R>): x is Right<R> {
    return 'right' in x
}
