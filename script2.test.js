const fetch = require('node-fetch')
const swapi = require('./script2')

// it('calls swapi to get people', (done) => {
//     expect.assertions(1);
//     swapi.getPeople(fetch).then(data => {
//         expect(data.count).toEqual(87);
//         done()
//     })
// });

// it('calls swapi to get people promise', () => {
//     expect.assertions(2)
//     return swapi.getPeoplePromise(fetch).then(data => {
//         expect(data.count).toEqual(87)
//     })
// });


it('get people return count and result', () => {
    const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
        json: () => Promise.resolve({
            count: 87,
            results: [0, 1, 2, 3, 4, 5]
        })
    }))
    return swapi.getPeoplePromise(mockFetch).then(data => {
        expect(mockFetch.mock.calls.length).toBe(1)
        expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people')
    });
});