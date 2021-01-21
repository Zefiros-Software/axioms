import { Either, Left } from "~/type/either"

export function isLeft<L, R>(x: Either<L, R>): x is Left<L> {
    return "left" in x
}
