test('mockImplementation', () => {

    // Mocks every time. Always returns last mocked implementation
    const mockFn = jest.fn(() => 'default')
        .mockImplementation(() => 'First Call')
        .mockImplementation(() => 'Second Call');

    const res1 = mockFn();
    const res2 = mockFn();

    console.log(res1); // 'Second Call'
    console.log(res2); // 'Second Call'
});

test('mockImplementationOnce', () => {

    // Mocks only once. Then goes for the previous until it gets the default
    const mockFn = jest.fn(() => 'default')
        .mockImplementationOnce(() => 'First Call')
        .mockImplementationOnce(() => 'Second Call');

    const res1 = mockFn();
    const res2 = mockFn();
    const res3 = mockFn();

    console.log(res1); // 'First Call'
    console.log(res2); // 'Second Call'
    console.log(res3); // 'default'
});

