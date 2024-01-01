class OldMovie{
    constructor(movie){
        this._title = movie.title
        this._duration = movie.duration
        this._released_in = movie.released_in
        this._picture = movie.picture
    }
    get title(){
        return this._title
    }
    get duration(){
        return this._duration
    }
    get released_in(){
        return this._released_in
    }
    get picture(){
        return `./assets/${this._picture}`
    }
}