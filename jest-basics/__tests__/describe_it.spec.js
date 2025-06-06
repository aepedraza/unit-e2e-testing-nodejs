beforeAll(() => {
    console.log('beforeAll');
});

beforeAll(() => {
    // You can repeat the method. Is called in the declared order
    console.log('beforeAll repeated');
});

afterAll(() => {
    console.log('afterAll')
});

beforeEach(() => {
    console.log('beforeEach');
});

afterEach(() => {
    console.log('afterEach')
});

// Group related tests
describe('Auth', () => {
    // alias for test() in a more human-readable flavour
    it('Should run auth test 1', () => {});
    it('Should run auth test 2', () => {});
});

describe('Products', () => {
    // alias for test() in a more human-readable flavour
    it('Should run products test 1', () => {});
    it('Should run products test 2', () => {});
});