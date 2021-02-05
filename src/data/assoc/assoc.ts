import { isObject } from '~/guard/is-object'

export class AssocMap<K, T> {
    private readonly primitives: Map<string | number, T> = new Map<string | number, T>()
    private readonly objects: WeakMap<any, T> = new WeakMap<any, T>()

    public set(key: K, value: T): AssocMap<K, T> {
        if (isObject(key)) {
            this.objects.set(key, value)
        } else {
            this.primitives.set((key as unknown) as string | number, value)
        }
        return this
    }

    public has(key: K): boolean {
        if (isObject(key)) {
            return this.objects.has(key)
        } else {
            return this.primitives.has((key as unknown) as string | number)
        }
    }

    public get(key: K): T | undefined {
        if (isObject(key)) {
            return this.objects.get(key)
        } else {
            return this.primitives.get((key as unknown) as string | number)
        }
    }
}
