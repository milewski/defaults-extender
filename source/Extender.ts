export const extend = <A, B>(defaults: A, options: B): A & B => {

    const object = {}
    const optionsType = typeof options;

    Object.keys(defaults).map(property => {

        if (typeof defaults[property] === 'object' && options !== undefined) {

            const alias = first(defaults[property]),
                isObject = optionsType === 'object';

            if (alias === undefined) {
                return object[property] = isObject ? options[property] : defaults[property];
            }

            return object[property] = extend(defaults[property], isObject ? options[property] : options);

        } else if (options === undefined) {
            return object[property] = defaults[property];
        } else if (optionsType !== 'object') {
            object[property] = options;
            options = undefined;
            return object;
        }

        return object[property] = options[property] !== undefined ? options[property] : defaults[property]

    });

    return <A & B>object;

}

const first = (object: {}): string => {
    for (let property in object) return property;
}
