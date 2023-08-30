var myMovies = [
    {
      title: "Inception",
      published: 2010,
      genres: ["Action", "Adventure", "Sci-Fi"],
      actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
      imdb: "https://www.imdb.com/title/tt1375666/"
    },
    {
      title: "The Shawshank Redemption",
      published: 1994,
      genres: ["Drama"],
      actors: ["Tim Robbins", "Morgan Freeman"],
      imdb: "https://www.imdb.com/title/tt0111161/"
    },
    {
      title: "Pulp Fiction",
      published: 1994,
      genres: ["Crime", "Drama"],
      actors: ["John Travolta", "Samuel L. Jackson", "Uma Thurman"],
      imdb: "https://www.imdb.com/title/tt0110912/"
    },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      published: 2001,
      genres: ["Adventure", "Drama", "Fantasy"],
      actors: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
      imdb: "https://www.imdb.com/title/tt0120737/"
    },
    {
      title: "The Dark Knight",
      published: 2008,
      genres: ["Action", "Crime", "Drama"],
      actors: ["Christian Bale", "Heath Ledger", "Gary Oldman"],
      imdb: "https://www.imdb.com/title/tt0468569/"
    },
    {
      title: "Forrest Gump",
      published: 1994,
      genres: ["Drama", "Romance"],
      actors: ["Tom Hanks", "Robin Wright"],
      imdb: "https://www.imdb.com/title/tt0468569/"
    },
    {
      title: "The Matrix",
      published: 1999,
      genres: ["Action", "Sci-Fi"],
      actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
      imdb: "https://www.imdb.com/title/tt0133093/"
    },
    {
      title: "Avatar",
      published: 2009,
      genres: ["Action", "Adventure", "Sci-Fi"],
      actors: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
      imdb: "https://www.imdb.com/title/tt0499549/"
    },
    {
      title: "Inglourious Basterds",
      published: 2009,
      genres: ["Adventure", "Drama", "War"],
      actors: ["Brad Pitt", "Diane Kruger", "Christoph Waltz"],
      imdb: "https://www.imdb.com/title/tt0361748/"
    },
    {
      title: "Interstellar",
      published: 2014,
      genres: ["Adventure", "Drama", "Sci-Fi"],
      actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
      imdb: "https://www.imdb.com/title/tt0816692/"
    }
]
const FORM = document.querySelector('form')
const movieDiv = document.querySelector('.movieBox')

FORM.addEventListener('submit', (e) => {
  e.preventDefault()
  let searchValue = capitalizer(FORM.search.value)
  const RESULTS = myMovies.filter((element) => {
    return element.title.includes(searchValue) 
    || compare(element.published, searchValue)
    || findInArray(element.genres, searchValue)
    || findInArray(element.actors, searchValue)
  })
  const ul = document.createElement('ul')
  ul.classList.add('grid__con')
  
  if(RESULTS.length === 0) {
    ul.innerHTML = 
    ` <h3>The search "${searchValue.toLowerCase()}" does not match anything.</h3>`
  }

  movieDiv.innerHTML = ''
  RESULTS.forEach((movie) => {
    ul.innerHTML += 
  `<a href="${movie.imdb}">
    <li class="movieDetails">
      <h3>${movie.title}</h3>
      <ul class="movieSpecs">
        <div>
          <li><span class="boldSpan">Year:</span></li>
          <li><span class="boldSpan">Genres:</span></li>
          <li><span class="boldSpan">Actors:</span></li>
        </div>
        <div>
          <li>${movie.published}</li>
          <li>${movie.genres.join(", ")}</li>
          <li>${movie.actors.join(", ")}</li>
        </div>
      </ul>
    </li>
  </a>`
  })
  
  movieDiv.appendChild(ul)
})

const compare = (a, b) => a == b 

function capitalizer(word) {
  const lower = word.toLowerCase();
  return word.charAt(0).toUpperCase() + lower.slice(1);
}

function findInArray(haystack, needle) {
  return haystack.find(function(item) {
      return item.includes(needle)
  })
}