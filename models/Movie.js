class Movie{
    constructor(movie){
        this._title = movie.title
        this._duration = movie.duration
        this._picture = movie.picture
        this._released_in = movie.released_in
    }
    get title(){
        return this._title.fr ? this._title.fr : this._title.en
    }
    get duration(){
        return (`${Math.floor(this._duration / 60)}h${this._duration % 60}mn`)
    }
    get picture(){
        return `./assets/${this._picture}`
    }
    get picture(){
        return `./assets/thumbnails/${this._picture}`
    }
    get released_in(){
        return this._released_in
    }
}