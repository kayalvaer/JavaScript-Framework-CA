import { baseUrl } from "./setup-api/api.js";
import messageAlerts from "./components/messageAlerts.js";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if (!id) {
    document.location.href = "/";
}

const articlesUrl = baseUrl + "articles/" + id;

console.log(articlesUrl);

(async function () {
    try {
        const response = await fetch(articlesUrl);
        const information = await response.json();

        document.title = information.title;

        const container = document.querySelector(".infoContainer");

        container.innerHTML = `<div class="card p-5 d-flex justify-content-center flex-30 infoDetail"> 
                            <h1 class="text-primary">${information.title}</h1>
                                <div class="card-body ">
                                    <p class="articleSummary">${information.summary}</p>
                                    <p class="articleAuthor">${information.author}</p>
                                    <span class="articlePublish"><em>${information.published_at}</em></span>
                                </div>
                            </div>`;


        console.log(information);

    } catch (error) {
        messageAlerts("error", error, ".infoContainer");
    }
})();