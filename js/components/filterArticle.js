import articleList from "./articleList.js"

export default function filterArticle(articles){

    const search = document.querySelector("input.articleFilter");

    search.addEventListener("keyup", filterItem)

    function filterItem(event) {
        const searchValue = (event.target.value);

        console.log(searchValue);

        const filteredArticles = articles.filter(function(article){
            if(article.id  <= searchValue || article.title.toLowerCase().indexOf(searchValue.toLowerCase()) != -1){
                return true;
            }
        });

        articleList(filteredArticles);
    }
}