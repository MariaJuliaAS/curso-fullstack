export function applyMixins(derivedCtor: any, constructors: any[]) { //primeiro parametro: interface ---- segundo parametro: construtores/classes q quer utilizar
    constructors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(
                derivedCtor.prototype,
                name,
                Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null)
            );
        });
    });
}