type Lookup<T, K extends keyof any, Else = never> = K extends keyof T ? T[K] : Else

type Tail<T extends unknown[]> = T extends [unknown, ...infer R] ? R : never

type Unary = (arg: unknown) => unknown
type ArgType<F, Else = never> = F extends (arg: infer A) => unknown ? A : Else
type AsChain<F extends [Unary, ...Unary[]], G extends Unary[] = Tail<F>> = {
    [K in keyof F]: (arg: ArgType<F[K]>) => ArgType<Lookup<G, K, unknown>, unknown>
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Last<T extends unknown[]> = T extends [...infer F, infer L] ? L : never

export function $<F extends [(...arg: any) => any, ...Array<(arg: any) => any>]>(
    ...f: F & AsChain<F>
): (arg: ArgType<F[0]>) => ReturnType<Last<F>> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return f.reduce((prevFn, nextFn) => (value: any) => nextFn(prevFn(value)))
}
