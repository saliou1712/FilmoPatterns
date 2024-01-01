class ExternalMovie {
    constructor(movie){
        this._title = movie.title_fr
        this._duration = movie.infos.duration
        this._picture = movie.medias.picture
        this._released_in = movie.infos.released_in
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