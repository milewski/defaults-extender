export class Extender {

    public extend<A, B>(defaults: {}, options: {}): A & B {

        const object = {}
        const optionsType = typeof options;

        Object.keys(defaults).map(property => {

            if (typeof defaults[property] === 'object' && options !== undefined) {

                const alias = this.first(defaults[property]),
                    isObject = optionsType === 'object';

                if (alias === undefined) {
                    return object[property] = isObject ? options[property] : defaults[property];
                }

                return object[property] = this.extend(defaults[property], isObject ? options[property] : options);

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

    private best(object: {}, ...properties) {

        let result = object[properties.shift()];

        return result === undefined ? object : this.best(result, ...properties);

    }

    private first(object: {}): string {
        for (let property in object) return property;
    };

}
