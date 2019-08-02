describe('Tests for HomeWork_3 tasks', () => {

    describe('init', () => {
        const testData = [
            {args: [], expected: []},
            {args: null, expected: undefined},
            {args: undefined, expected: undefined},
            {args: [0], expected: [0]},
            {args: [1, 3], expected: [1, 3]},
            {args: [1, -3, 5, -7, 9], expected: [1, -3, 5, -7, 9]}
        ];

        const araylist = new Alist();
        const makeTest = (data) => {
            const {args, expected} = data;

            it(`should return [${expected}] when initial arguments = [${args}]`, () => {
                const actual = araylist.init(args);
                assert.deepEqual(actual, expected);
            });
        };

        testData.forEach(data => makeTest(data));
    });

    describe('getSize', () => {
        const testData = [
            {array: [], expected: 0},
            {array: null, expected: 0},
            {array: undefined, expected: 0},
            {array: [0], expected: 1},
            {array: [1, 3], expected: 2},
            {array: [1, -3, 5, -7, 9], expected: 5}
        ];

        const makeTest = (data) => {
            const {array, expected} = data;

            it(`should return [${expected}] when array = [${array}]`, () => {
                const araylist = new Alist();
                araylist.init(array);
                const actual = araylist.getSize();
                assert.deepEqual(actual, expected);
            });
        };

        testData.forEach(data => makeTest(data));
    });

    describe('to String', () => {
        const testData = [
            {args: [], expected: '"[]"'},
            {args: null, expected: '"[]"'},
            {args: undefined, expected: '"[]"'},
            {args: [0], expected: '"[0]"'},
            {args: [1, 3], expected: '"[1, 3]"'},
            {args: [1, -3, 5, -7, 9], expected: '"[1, -3, 5, -7, 9]"'}
        ];

        const makeTest = (data) => {
            const {args, expected} = data;

            it(`should return ${expected} when array = [${args}]`, () => {
                const araylist = new Alist();
                araylist.init(args);
                const actual = araylist.toString();
                assert.deepEqual(actual, expected);
            });
        };

        testData.forEach(data => makeTest(data));
    });

    describe('push', () => {
        const testData = [
            {array: null, el: 10, expected: 1},
            {array: undefined, el: 10, expected: 1},
            {array: [], el: 0, expected: 1},
            {array: [1], el: -5, expected: 2},
            {array: [1, 3], el: -5, expected: 3},
            {array: [1, '', 0, 'test', 4, 5], el: 6, expected: 7},
            {array: [-1, 10, undefined, 4, null], el: 'test', expected: 6},
            {array: [-1, 'undefined', 4, null], el: null, expected: 5}
        ];

        const makeTest = (data) => {
            const {array, el, expected} = data;

            it(`should return array length: ${expected} when array = "[${array}]" and push elem = ${el}`, () => {
                const araylist = new Alist();
                araylist.init(array);
                const actual = araylist.push(el);
                assert.deepEqual(actual, expected);
            });
        };

        testData.forEach(data => makeTest(data));
    });

    describe('pop', () => {
        const testData = [
            {array: undefined, expected: undefined},
            {array: null, expected: undefined},
            {array: [], expected: undefined},
            {array: [1], expected: 1},
            {array: [1, -3], expected: -3},
            {array: [1, '', 0, 'test', 4, ''], expected: ''},
            {array: [-1, 10, undefined, 4, null], expected: null},
            {array: [-1, undefined], expected: undefined}
        ];

        const makeTest = (data) => {
            const {array, expected} = data;

            it(`should return remove last element: ${expected} when array = "[${array}]"`, () => {
                const araylist = new Alist();
                araylist.init(array);
                const actual = araylist.pop();
                assert.deepEqual(actual, expected);
            });
        };

        testData.forEach(data => makeTest(data));
    });

    describe('shift', () => {
        const testData = [
            {array: undefined, expected: undefined},
            {array: null, expected: undefined},
            {array: [], expected: undefined},
            {array: [1], expected: 1},
            {array: ['', 0, 'test', 4, ''], expected: ''},
            {array: ['4',4], expected: '4'},
            {array: [undefined], expected: undefined},
            {array: [null], expected: null}
        ];

        const makeTest = (data) => {
            const {array, expected} = data;

            it(`should return remove last element: ${expected} when array = "[${array}]"`, () => {
                const araylist = new Alist();
                araylist.init(array);
                const actual = araylist.shift();
                assert.deepEqual(actual, expected);
            });
        };

        testData.forEach(data => makeTest(data));
    });

    describe('unshift', () => {
        const testData = [
            {array: null, el: 10, expected: 1},
            {array: undefined, el: 10, expected: 1},
            {array: [], el: 0, expected: 1},
            {array: [1], el: -5, expected: 2},
            {array: [1, 3], el: -5, expected: 3},
            {array: [1, '', 0, 'test', 4, 5], el: undefined, expected: 7},
            {array: [-1, 10, undefined, 4, null], el: 'test', expected: 6},
            {array: [-1, 'undefined', 4, null], el: null, expected: 5}
        ];

        const makeTest = (data) => {
            const {array, el, expected} = data;

            it(`should return size of array: ${expected} when array = "[${array}]" after adding first element ${el}`, () => {
                const araylist = new Alist();
                araylist.init(array);
                const actual = araylist.unshift();
                assert.deepEqual(actual, expected);
            });
        };

        testData.forEach(data => makeTest(data));
    });

})
