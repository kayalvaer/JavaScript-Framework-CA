import { getFavourite } from "./components/validateFavourite.js";
import messageAlerts from "./components/messageAlerts.js";

const favourites = getFavourite();

if(favourites.length === 0) {
    messageAlerts("warning", "Unfortunatelly, favourite list is empty", ".articlesContainer");
}

const container = document.querySelector(".articlesContainer");

favourites.forEach(function(item) {
    container.innerHTML += `<div class="card-deck d-flex flex-wrap">
                                <div class="card mb-5">
                                    <i class="fa fa-heart p-3"></i>
                                    <div class="card-body">
                                        <h5 class="card-title">${item.title}</h5>
                                        <p class="card-text">${item.author}</p>
                                        <p class="card-text"><small class="text-muted">${item.published_at}</small></p>
                                    </div>
                                </div>
                        </div>`;

});