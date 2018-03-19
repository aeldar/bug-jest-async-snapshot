const waitForValue = require('./wait-for-value');

describe('Jest async experiment', async() => {
    it('First', async() => {
        expect.assertions(1);
        const testValue = 'one';
        const result = await waitForValue(1000, testValue);
        expect(result).toMatchSnapshot();
    });
    it('Second', async() => {
        expect.assertions(1);
        const testValue = 'two';
        const result = await waitForValue(1000, testValue);
        expect(result).toMatchSnapshot();
    });
    it('Third', async() => {
        expect.assertions(1);
        const testValue = 'three';
        const result = await waitForValue(1000, testValue);
        expect(result).toMatchSnapshot();
    });
});