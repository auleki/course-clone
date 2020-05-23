import {
    handleResponse,
    handleError
} from './apiUtils';

const baseUrl = process.env.REACT_APP_API_URL + "/authors";

export function getAuthors() {
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
};

export function saveAuthor(author) {
    // make a call to the base url, add the author id is there is one or an empty string
    return fetch(baseUrl + (author.id || ""), {
            method: author.id ? "PUT" : "POST",
            headers: {
                "content-type": "application/json"
            }, // If an author ID exists make an update else, send it as fresh
            body: JSON.stringify(author)
        })
        .then(handleResponse)
        .catch(handleError);
};


export function deleteAuthor(authorId) {
    return fetch(baseUrl + authorId, {
            method: "DELETE"
        })
        .then(handleResponse)
        .catch(handleError);
};