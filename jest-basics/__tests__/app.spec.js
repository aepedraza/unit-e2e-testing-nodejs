const { getData } = require('../app');
const crypto = require('crypto');

jest.mock('crypto');

test('Fetch Data (mock)', async () => {

    // mockResolvedValueOnce: fn injected by jest.mock
    crypto.randomBytes.mockResolvedValueOnce('bytes');

    const res = await getData();
    expect(res).toBe('bytes');
});

test('Fetch Data (spyOn)', async () => {
    // mockResolvedValueOnce similar to mockImplementationOnce(() => Promise.resolve(...));
    jest.spyOn(crypto, 'randomBytes')
        .mockResolvedValueOnce('bytes');

    const res = await getData();
    expect(res).toBe('bytes');
})