class Api {
    constructor(url){
        this._url = url
    }
    get = async ()=>{
        try{
            const response = await fetch(this._url)
            const responseJSON = await response.json()
            return responseJSON.data
        }
        catch(err){
            console.log(err)
        }
    }
}

class MovieApi extends Api {
    constructor(url){
        super(url)
    }
    getMovie = async () => {
        return await this.get()
    }
}