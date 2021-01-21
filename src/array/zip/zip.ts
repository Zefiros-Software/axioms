import { next } from '~/generator/next'
import { isRight } from '~/guard/is-right'
import { toTraverser, Traversable } from '~/type/traversable'

type ZipItem<Arr> = Arr extends Generator<infer G> ? G : Arr extends Array<infer I> ? I : never
type Zip<T> = { [k in keyof T]: ZipItem<T[k]> }
type Unzip<T> = {
    [k in keyof T]: readonly T[k][]
}

export function* izip<T extends readonly [...(Traversable<unknown>)[]]>(...xs: [...T]) {
    const traversers = xs.map(toTraverser)
    for (let vals = traversers.map(next); vals.every(isRight); vals = traversers.map(next)) {
        yield vals.map(x => x.right) as unknown as Zip<T>
    }
}

export function* izipWith<T extends readonly [...unknown[]], R>(f: (...args: [...T]) => R, ...xs: Unzip<[...T]>) {
    const traversers = xs.map(toTraverser)
    for (let vals = traversers.map(next); vals.every(isRight); vals = traversers.map(next)) {
        yield f(...(vals.map(x => x.right) as [...T]))
    }
}

export function zip<T extends readonly [...(Traversable<unknown>)[]]>(...xs: [...T]) {
    return [...izip(...xs)]
}

export function zipWith<T extends readonly [...unknown[]], R>(f: (...args: [...T]) => R, ...xs: Unzip<[...T]>): readonly R[] {
    return [...izipWith(f, ...xs)]
}
