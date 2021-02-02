import { Nothing } from '~/type/maybe'

export function isNothing(x: Nothing | unknown): x is Nothing {
    return x === Nothing
}
