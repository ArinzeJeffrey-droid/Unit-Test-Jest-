const googleDatabase = [
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animals.com',
    'catpictures.com',
    'myfavoritecats.com'
]


const googleSearch = (searchInput, db) => {
    const matches = db.filter(website => {
        return website.includes(searchInput)
    })
    return matches.length > 3 ? matches.slice(0, 3) : matches
}


// console.log(googleSearch('animal'))


module.exports = googleSearch