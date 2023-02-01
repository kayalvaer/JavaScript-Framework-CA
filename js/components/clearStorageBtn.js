export default function clearStorageBtn() {
        const clearStorage = document.querySelector("#clear");

        clearStorage.addEventListener("click", updateStorageList);

        function updateStorageList() {
            if (confirm("You are about to clear local storage list, Do you want to continue!")) {
                //clear localstorage list
                //localStorage.removeItem("article.favourite");
                localStorage.clear();
                
            }
            
        }
}