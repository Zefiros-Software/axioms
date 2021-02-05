export type KeyOf<T> = T extends unknown ? keyof T : never
export type KeysOfType<T, U> = { [K in keyof T]: T[K] extends U ? K : never }[keyof T]
export type RequiredKeys<T> = Exclude<KeysOfType<T, Exclude<T[keyof T], undefined>>, undefined>
export type OptionalKeys<T> = Exclude<keyof T, RequiredKeys<T>>