const mcuShows = ["Loki", "MoonKnight"];
const starWarsShows = ["The Mandalorian", "The Book of Boba Fett"];
const disneyPlusShows = [...mcuShows, ...starWarsShows, "The Beatles: Get Back"];
console.log(disneyPlusShows);
const netflixMovies = {
    action: 'Extraction',
    crime: 'The Irishman'
};
const amazonPrimeMovies = {
    action: 'The Tomorrow War',
    drama: 'One Night in Miami'
};
const streamingMovies = {...amazonPrimeMovies, ...netflixMovies, musical: "Hamilton"};
console.log(streamingMovies);
const disneyJunior = ["Mickey Mouse Clubhouse", "Spidey and his Amazing Friends"];
const [Mickey, Spidey] = disneyJunior;
console.log(Mickey, Spidey);
const avengers = {
    WarMachine: "James Rhodes",
    theHulk: "Bruce Banner"
};
const {warMachine, theHulk} = avengers;
console.log(warMachine,theHulk);
const moreAvengers = {
    blackWidow: "Natasha Romanoff",
    hawkeye: "Clint Bartion",
    ironMan: "Tony Stark"
};
const {blackWidow: nat, ...others} =moreAvengers;
console.log(nat, others);