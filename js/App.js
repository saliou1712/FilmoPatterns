class App{
    constructor(){
        this.container = document.getElementById('movies')
        this.main = async () => {
            const movieApi = new MovieApi("./data/external-movie-data.json")
            const movies = await movieApi.getMovie()
            movies.forEach(
                (movie) => {
                    const formatedMovie = new ExternalMovie(movie)
                    const movieCard = new MovieCard(formatedMovie)
                    this.container.appendChild(movieCard.CreateMovieCard())
                }
            )
        }
    }
}

const app = new App()
app.main()