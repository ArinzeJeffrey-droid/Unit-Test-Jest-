const googleSearch = require('./script')

dbMock = [
    'dog.com',
    'hello.com',
    'batman.com',
    'spider-man.com',
    'test.com'
];

describe('googleSearch', () => {
    it('this is a test', () => {
        expect('hello').toBe('hello');
    })

    it('dummy data search', () => {
        expect(googleSearch('test.com', dbMock)).toEqual([]);
        expect(googleSearch('dog.com', dbMock)).toEqual(['dog.com']);
    });

    it('works with undefined and null input', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([])
        expect(googleSearch(null, dbMock)).toEqual([])
            // expect(googleSearch('', dbMock)).toEqual([]);
    });

    it('result length not more than 3', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3)
    })
});
