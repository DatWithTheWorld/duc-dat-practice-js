function cardTrending(imgLink,status,name,year, type){
    return `
    <div class="card-trending">
    <figure class="card-trending-figure">
    <img src="${imgLink}"> 
    </figure>
    <button class="btn-addFavorite">
    <figure class="card-trending-status">
    <img src="${status}"> 
    </figure>
    </button>
    <div class="card-trending-content">
    <h3 class="card-trending-title">${name}</h3>
    <div class="card-trending-block">
    <span class="card-trending-year">${year}</span>
    <span class="card-trending-type">${type}</span>
    </div>
    </div>
    </div>
    `;
}
export default cardTrending;