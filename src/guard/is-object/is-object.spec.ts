import { isObject } from '~/guard/is-object'

describe('is an object', () => {
    test('empty object', () => {
        expect(isObject({})).toBe(true)
    })

    test('object with properties', () => {
        expect(isObject({ foo: 'bar' })).toBe(true)
    })

    test('class instance', () => {
        class Foo {
            public constructor(public foo: string) {
                this.foo = foo
            }
        }

        expect(isObject(new Foo('foo'))).toBe(true)
    })
})

describe('is not an object', () => {
    test('null', () => {
        expect(isObject(null)).toBe(false)
    })

    test('array', () => {
        expect(isObject([])).toBe(false)
        expect(isObject(new Array(1))).toBe(false)
    })

    test('number', () => {
        expect(isObject(0)).toBe(false)
        // expect(isObject(new Number('0'))).toBe(false)
    })

    test('function', () => {
        expect(
            isObject(() => {
                return
            })
        ).toBe(false)
        expect(
            isObject(function () {
                return
            })
        ).toBe(false)
    })
})
