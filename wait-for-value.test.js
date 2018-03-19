const waitForValue = require('./wait-for-value');

const shortTimeout = 1000;
const longTimeout = 6000;

describe('Jest async experiment', async() => {
    it('Long timeout, more than default 5000', async() => {
        expect.assertions(1);
        const testValue = 'one';
        const result = await waitForValue(longTimeout, testValue);
        expect(result).toMatchSnapshot();
    });
    it('Short timeout', async() => {
        expect.assertions(1);
        const testValue = 'two';
        const result = await waitForValue(shortTimeout, testValue);
        expect(result).toMatchSnapshot();
    });
    it('Short timeout one more time', async() => {
        expect.assertions(1);
        const testValue = 'three';
        const result = await waitForValue(shortTimeout, testValue);
        expect(result).toMatchSnapshot();
    });
});