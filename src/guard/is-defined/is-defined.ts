export function isDefined<TValue>(value: TValue | undefined | null | void): value is TValue {
    return value !== null && value !== undefined
}
