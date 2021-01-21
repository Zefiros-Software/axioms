import { Nothing } from '~/type/nothing'

export function isNothing(x: Nothing | unknown): x is Nothing {
    return x === Nothing
}
