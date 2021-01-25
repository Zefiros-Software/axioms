export function isGenerator(fn: unknown | GeneratorFunction): fn is GeneratorFunction {
    return typeof fn === 'function' && fn.constructor !== null && fn.constructor.name === 'GeneratorFunction'
}
