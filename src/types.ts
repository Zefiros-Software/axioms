type ArrayIterator<T, R = unknown> = (value: T, index: number, collection: ReadonlyArray<T>) => R
type ObjectIterator<T, R = unknown> = (value: T[keyof T], key: string, collection: T) => R
