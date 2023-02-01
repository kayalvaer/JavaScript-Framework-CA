 import articleList from "./articleList";

addArticles(articles);

export function addArticles(articleList) {
    const container = document.querySelector(".articlesContainer");

    articleList.forEach(function (article){
        console.log(article.id);

        articlesContainer.innerHTML += `li data-id="${article.id}">${article.title}</li>`;

    });
} 