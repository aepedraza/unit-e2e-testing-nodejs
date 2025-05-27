test('addition', () => {
    expect(2 + 2).toBe(4);
});

test('null', () => {
    const i = null;

    expect.assertions(2);

    expect(i).toBeNull();
    expect(i).toBeDefined();
});

const animals = ['cat', 'dog']

test('animal array', () => {
    expect(animals).toContain('cat');
    expect(animals).toBeInstanceOf(Array);
});

function throwAnError() {
    throw new Error('Some error');
}

test('throw an error', () => {
    expect(() => throwAnError()).toThrow('Some error');
})