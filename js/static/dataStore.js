const validityKey = "token";
const userKey = "user";

export function addTokenKey(token) {
    addData(validityKey, token);
}

export function getTokenKey() {
    return getData(validityKey);
}

export function addUser(user) {
    addData(userKey, user);
}

export function getUsername() {
    const user = getData(userKey);

    if (user) {
        return user.username;
   }

   return null;
}


function addData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getData(key) {
    const value = localStorage.getItem(key);

    if (!value) {
        return [];
    }

    return JSON.parse(value);
}