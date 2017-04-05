import { extend } from "../source/Extender";

const assert = require('assert');
const defaults = {
    name: 'Hello World',
    one: true,
    two: false,
    three: false,
    four: true,
    five: 'something',
    optimization: {
        enabled: true,
        format: 'jpg',
        size: 1024
    },
    engine: {
        name: 'graphic-magic',
    },
    nested: {
        one: 1,
        two: {
            three: 3,
            four: 4
        },
        five: null
    },
    really: {
        deeper: {
            short: {
                hand: {
                    enabled: 'yes'
                }
            }
        },
        deep: {
            nested: {
                object: {
                    boolean: true,
                    string: 'flower',
                    format: 'jpg'
                },
                second: {
                    format: 'png'
                }
            }
        }
    }
};

describe('Extender', function () {

    it('should return an extension of defaults <-> options', () => {

        const result = extend(defaults, {
            name: 'Changed',
            one: true,
            two: false,
            three: true,
            four: false,
            five: null,
        });

        assert.strictEqual(result.name, 'Changed');
        assert.strictEqual(result.one, true);
        assert.strictEqual(result.two, false);
        assert.strictEqual(result.three, true);
        assert.strictEqual(result.four, false);
        assert.strictEqual(result.five, null);

    });

    it('should work with nested objects', () => {

        const result = extend(defaults, {
            nested: {
                one: 'cake',
                two: {
                    three: 'pie'
                },
                five: false
            }
        });

        assert.strictEqual(result.nested.one, 'cake');
        assert.strictEqual(result.nested.two.three, 'pie');
        assert.strictEqual(result.nested.two.four, 4);
        assert.strictEqual(result.nested.five, false);

    });

    it('should set the short-handed property correctly', () => {

        const result = extend(defaults, {
            optimization: false,
            engine: 'node-canvas',
            really: {
                deeper: 'no',
                deep: {
                    nested: {
                        object: {
                            boolean: false,
                            format: 'png'
                        },
                        second: 'jpg'
                    }
                }
            }
        });

        assert.strictEqual(result.optimization.enabled, false);
        assert.strictEqual(result.optimization.format, 'jpg');
        assert.strictEqual(result.engine.name, 'node-canvas');
        assert.strictEqual(result.really.deep.nested.object.boolean, false);
        assert.strictEqual(result.really.deep.nested.object.format, 'png');
        assert.strictEqual(result.really.deep.nested.object.string, 'flower');
        assert.strictEqual(result.really.deep.nested.second.format, 'jpg');
        assert.strictEqual(result.really.deeper.short.hand.enabled, 'no');

    });

});
