const obscureCreditCard = require ('./creditCard');

describe('obscureCreditCard', () => {
    test('I want to be able to retrieve my credit card number obscured except for the last 4 digits (length 12)', ()=> {
        const input = '123456789012';
        const expected = '********9012';
        expect(obscureCreditCard(input)).toBe(expected);
    });
    test('I want to be able to retrieve my credit card number obscured except for the last 4 digits (length 16)', ()=> {
        const input = '1234567890123456';
        const expected = '************3456';
        expect(obscureCreditCard(input)).toBe(expected);
    });
    test('I shouldnt to be able to retrieve my credit card number obscured when the length is less than 12', ()=> {
        const input = '1234567890';
        const expected = 'Invalid Credit Card Number';
        expect(obscureCreditCard(input)).toBe(expected);
    });
    test('I shouldnt to be able to retrieve my credit card number obscured when the length is more than 16', ()=> {
        const input = '12345678901234567';
        const expected = 'Invalid Credit Card Number';
        expect(obscureCreditCard(input)).toBe(expected);
    });
});