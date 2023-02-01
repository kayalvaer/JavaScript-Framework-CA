import { getFavourite, saveFavourite } from "./validateFavourite.js";

export default function favouritesFunctionality() {
    const favIcons = document.querySelectorAll(".heartIcon");
    console.log(favIcons)

    favIcons.forEach(function(icon) {
        icon.addEventListener("click", clickFunction);
    });

    function clickFunction() {
        this.classList.toggle("far");
        this.classList.toggle("fa");

        const id = this.dataset.id;
        const title = this.dataset.title;
        const author = this.dataset.author;
        const published_at = this.dataset.published_at;

        const activeFavourites = getFavourite();
        //check if id is already in the array
        const article = activeFavourites.find(function(favouriteItem) {
            if(favouriteItem.id === id) {
                return true;
            }
        })

        if(!article) {
            const addFavourite = {id: id, title: title, author: author, published_at: published_at};
            activeFavourites.push(addFavourite);
            saveFavourite(activeFavourites);
        }
        else {
            const editedFavourites = activeFavourites.filter(function(item) {
                if(item.id !== id) {
                    return true
                }
            })
            saveFavourite(editedFavourites);
        }
    }

}