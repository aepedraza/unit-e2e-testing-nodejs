const { getData } = require('../app');
const crypto = require('crypto');

jest.mock('crypto');

test('Fetch Data', async () => {
    // mockResolvedValueOnce: fn injected by jest.mock
    crypto.randomBytes.mockResolvedValueOnce('bytes');

    const res = await getData();
    console.log(res);
});