import { counter } from '~/generator/counter'
import { next } from '~/generator/next'
import { isArray } from '~/guard/is-array'
import { isDefined } from '~/guard/is-defined'
import { ilength } from '~/iterator/length'
import { fmap } from '~/iterator/map'

type ZipItem<Arr> = Arr extends Generator<infer G> ? G : Arr extends Array<infer I> ? I : never
type Zip<T> = { [k in keyof T]: ZipItem<T[k]> }
type Unzip<T> = {
    [k in keyof T]: readonly T[k][]
}

export function* izip<T extends readonly [...(unknown[] | Generator<unknown>)[]]>(...xs: [...T]) {
    // minlength is also used in haskell
    const minLength = Math.min(...xs.map(ilength).filter(isDefined))
    for (let i = 0; i < minLength; ++i) {
        yield (xs.map((arr) => (isArray(arr) ? arr[i] : next(arr as Generator<unknown>))) as unknown) as Zip<T>
    }

    yield* fmap(() => { }, xs)
}

export function* izipWith<T extends readonly [...unknown[]], R>(f: (...args: [...T]) => R, ...xs: Unzip<[...T]>) {
    // minlength is also used in haskell
    const minLength = Math.min(...xs.map((a) => a.length))
    for (let i = 0; i < minLength; ++i) {
        yield f(...(xs.map((a) => a[i]) as [...T]))
    }
}

export function zip<T extends readonly [...(unknown[] | Generator<unknown>)[]]>(...xs: [...T]) {
    return [...izip(...xs)]
}

export function zipWith<T extends readonly [...unknown[]], R>(f: (...args: [...T]) => R, ...xs: Unzip<[...T]>): readonly R[] {
    return [...izipWith(f, ...xs)]
}
