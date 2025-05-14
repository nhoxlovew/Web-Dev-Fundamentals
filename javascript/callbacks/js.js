// const movies = [
//     {
//         title: "Inception",
//         director: "Christopher Nolan",
//         year: 2010,
//         rating: 8.8,
//         score: 90
//     },
//     {
//         title: "The Matrix",
//         director: "The Wachowskis",
//         year: 1999,
//         rating: 8.7,
//         score: 90
//     },
//     {
//         title: "Interstellar",
//         director: "Christopher Nolan",
//         year: 2014,
//         rating: 8.6,
//         score: 89
//     },
//     {
//         title: "The Dark Knight",
//         director: "Christopher Nolan",
//         year: 2008,
//         rating: 9.0,
//         score: 91
//     },
//     {
//         title: "Pulp Fiction",
//         director: "Quentin Tarantino",
//         year: 1994,
//         rating: 8.9,
//         score: 88
//     }
// ]


// const recentMovies = movies.filter(movie =>{
//     return movie.year > 2000
// })



function validUserNames(usernames) {
    // your code here
   return usernames.filter(newuser => { return newuser.length < 10 })
    
}


//   const filterUser =
// ['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']


