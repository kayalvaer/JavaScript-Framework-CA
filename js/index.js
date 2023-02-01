//for future implementation/test
/* import { baseUrl } from "./setup-api/api.js"
import articleList from "./components/articleList.js";
import filterArticle from "./components/filterArticle.js";
import messageAlerts from "./components/messageAlerts.js";

const articlesUrl = baseUrl + "articles";

(async function() {

    try {
        const response = await fetch(articlesUrl);
        const json = await response.json();

        console.log(json)
        
        const articles = json;

        articleList(articles);
        filterArticle(articles);
    } catch (error) {
        console.log(error);
        messageAlerts("error", error, ".articlesContainer");
    }
})(); */

