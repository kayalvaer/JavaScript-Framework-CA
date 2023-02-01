const favouriteKey = "favourites";

export function getFavourite() {
    const favourites = localStorage.getItem(favouriteKey);

    if(favourites === null) {
        return [];
    }

    return JSON.parse(favourites)

}

export function saveFavourite(favourites) {
    localStorage.setItem(favouriteKey, JSON.stringify(favourites));
}
