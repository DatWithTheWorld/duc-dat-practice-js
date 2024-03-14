class Movie {
<<<<<<< Updated upstream
    constructor({mid, name, year, type, link, duration, description, evaluate}){
           this.mid = mid;
=======
    constructor({id, name, year, type,poster, link, duration, description, evaluate, favorites}){
           this.id = id;
>>>>>>> Stashed changes
           this.name = name;
           this.year = year;
           this.type = type;
           this.link = link;
           this.duration = duration;
           this.description = description;
           this.evaluate = evaluate;

    }
}

export default Movie;