class MovieCard {
    constructor(movie){
        this._movie = movie
    }
    CreateMovieCard = () => {
        const wrapper = document.createElement("div")
        wrapper.className = "movies__item"
        const Card = `
            <div class="movies__item__picture">
                <img
                    alt="${this._movie.title}"
                    src="${this._movie.picture}"
                />
            </div>
            <h3 class="">${this._movie.title}</h3>
            <p class="">
                <span>${this._movie.released_in}</span>
                -
                <span>${this._movie.duration}</span>
            </p>
        `
        wrapper.innerHTML = Card
        return(wrapper)
    }
}