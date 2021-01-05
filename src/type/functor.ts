// formal definition
// export interface Functor<T> {
//     map: <R>(fn: (a: T) => R) => Functor<R>
// }

// for practical purposes Iterable
// defines the required property
export type Functor<T> = Iterable<T> // | readonly T[]
