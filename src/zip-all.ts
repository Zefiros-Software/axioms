import { compact } from '~/compact'
import { isDefined } from '~/is-defined'

export function zipAll<T, U>(arrays: ReadonlyArray<[T, U]>): Array<[T | undefined, U | undefined]>
export function zipAll<T, U, V>(arrays: ReadonlyArray<[T, U, V]>): Array<[T | undefined, U | undefined, V | undefined]>
export function zipAll<T, U, V, W>(
    arrays: ReadonlyArray<[T, U, V, W]>
): Array<[T | undefined, U | undefined, V | undefined, W | undefined]>
export function zipAll<T, U, V, W, X>(
    arrays: ReadonlyArray<[T, U, V, W, X]>
): Array<[T | undefined, U | undefined, V | undefined, W | undefined, X | undefined]>
export function zipAll<T, U>(a: ReadonlyArray<T>, b: ReadonlyArray<U>): Array<[T | undefined, U | undefined]>
export function zipAll<T, U, V>(
    a: ReadonlyArray<T>,
    b: ReadonlyArray<U>,
    c: ReadonlyArray<V>
): Array<[T | undefined, U | undefined, V | undefined]>
export function zipAll<T, U, V, W>(
    a: ReadonlyArray<T>,
    b: ReadonlyArray<U>,
    c: ReadonlyArray<V>,
    d: ReadonlyArray<W>
): Array<[T | undefined, U | undefined, W | undefined]>
export function zipAll<T, U, V, W, X>(
    a: ReadonlyArray<T>,
    b: ReadonlyArray<U>,
    c: ReadonlyArray<V>,
    d: ReadonlyArray<W>,
    e: ReadonlyArray<X>
): Array<[T | undefined, U | undefined, V | undefined, W | undefined, X | undefined]>
export function zipAll<T, U, V, W, X>(
    a: ReadonlyArray<T> | [ReadonlyArray<T>, ReadonlyArray<U>, ReadonlyArray<V>, ReadonlyArray<W>, ReadonlyArray<X>],
    b?: ReadonlyArray<U>,
    c?: ReadonlyArray<V>,
    d?: ReadonlyArray<W>,
    e?: ReadonlyArray<X>
): Array<
    | [T | undefined, U | undefined]
    | [T | undefined, U | undefined, V | undefined]
    | [T | undefined, U | undefined, V | undefined, W | undefined]
    | [T | undefined, U | undefined, V | undefined, W | undefined, X | undefined]
> {
    const arrays = !isDefined(b)
        ? (a as [ReadonlyArray<T>, ReadonlyArray<U>, ReadonlyArray<V>, ReadonlyArray<W>, ReadonlyArray<X>])
        : compact(([a as ReadonlyArray<T>, b, c, d, e] as unknown) as [
              ReadonlyArray<T>,
              ReadonlyArray<U>,
              ReadonlyArray<V>,
              ReadonlyArray<W>,
              ReadonlyArray<X>
          ])
    const length = Math.max(...arrays.map(arr => arr.length))
    return Array.from(
        { length },
        (_, index) => arrays.map(array => array[index]) as [T, U] | [T, U, V] | [T, U, V, W] | [T, U, V, W, X]
    )
}
