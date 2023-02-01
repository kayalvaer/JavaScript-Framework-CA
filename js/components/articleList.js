import { getFavourite } from "./validateFavourite.js";
import favouritesFunctionality from "../components/favouritesFunctionality.js";
import clearStorageBtn from "../components/clearStorageBtn.js"


export default function articleList(articles) {
        
    const container = document.querySelector(".articlesContainer");
clearStorageBtn();


    container.innerHTML = "";

//alert user of empty article list

    if(articles.length === 0) {
       return (articlesContainer.innerHTML = "<p> Article List is empty </p>");
    }

    const activeFavourites = getFavourite();

    articles.forEach(function(article) {
            let styleFavourite = "far";

            const updatedFavourite = activeFavourites.find(function (item) {
                return parseInt(item.id) === article.id;
            });

            console.log(updatedFavourite);

            if(updatedFavourite !== undefined) {
                styleFavourite = "fa";
            }

            container.innerHTML += `<div id="accordion">
                            <div class="articlesContainer" >
                                <div class="card">
                                    <div class="card-header  justify-content-center bg-secondary" id="article-title">
                                        <a class="col-sm-9" href = "info.html?id=${article.id}">
                                            <h5 class="d-flex justify-content-center flex-wrap">
                                                <button class="btn btn-link text-white" data-toggle="collapse" data-target="collapse-${article._id}" 
                                                    aria-expanded="true" aria-controls="collapseOne-${article.id}">
                                                    <i class="fas fa-angle-down pr-3"></i> 
                                                    <strong>${article.title}</strong>  
                                                </button>
                                            </h5>
                                        </a>
                                        <div class="col-sm-3 d-flex justify-content-center flex-wrap">
                                            <a href="#" class="btn-lg doneIcon" data-id="${article.id}"><i class="fas fa-minus-square"></i></a>
                                            <a href="#" class="btn-lg addIcon"><i class="fas fa-plus-square text-primary"></i></a>
                                            <i class="${styleFavourite} fa-heart heartIcon" data-id="${article.id}" 
                                                data-title="${article.title}" data-author="${article.author}" data-published_at="${article.published_at}">
                                            </i>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>`;
        });

        favouritesFunctionality();

        //delete article list items
        //get the i elements to use parent element of the i

        const deleteItems = document.querySelectorAll(".doneIcon");

        console.log(deleteItems);

        deleteItems.forEach(function(delBtn) {
            delBtn.addEventListener("click", (event) => removeArticle(event, articles));
        });

        //function removeArticle(event, articles) {
        //    const parentElement = event.target.parentElement;
        //    console.log(parentElement);
        //OR
        //function(event){
        //    return removeArticle(event, articles);
        //}
}        

function removeArticle(event, articles) {
    const parentElement = event.target.parentElement;
    const id = parseInt(parentElement.dataset.id);
    console.log(parentElement);
    console.log(articles);

    //alert(id);

    const newArticleFilter = articles.filter(function(article) {
    //   alert(article.id);

        if(article.id !== id) {
            return true;
        }
    });

    articleList(newArticleFilter);

    console.log(newArticleFilter);

}