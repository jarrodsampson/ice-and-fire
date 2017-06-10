import store from '../Store';
import * as APIFunction from '../actions/API-data';

export function getAllBooks() {
    return fetch("https://www.anapioficeandfire.com/api/books?pageSize=200")
        .then(response => response.json())
        .then(json => {
            console.log("Books", json);
            store.dispatch(APIFunction.getBooksSuccess(json));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getBookById(id) {
    return fetch("https://www.anapioficeandfire.com/api/books/" + id)
        .then(response => response.json())
        .then(json => {
            console.log("Book", json);
            store.dispatch(APIFunction.getBookDetailSuccess(json));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getAllCharacters() {
    return fetch("https://www.anapioficeandfire.com/api/characters?page=1&pageSize=20")
        .then(response => response.json())
        .then(json => {
            console.log("Characters", json);
            store.dispatch(APIFunction.getCharactersSuccess(json));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getCharacterById(id) {
    return fetch("https://www.anapioficeandfire.com/api/characters/" + id)
        .then(response => response.json())
        .then(json => {
            console.log("Character", json);
            store.dispatch(APIFunction.getCharacterDetailSuccess(json));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getAllHouses() {
    return fetch("https://www.anapioficeandfire.com/api/houses?page=1&pageSize=20")
        .then(response => response.json())
        .then(json => {
            console.log("Houses", json);
            store.dispatch(APIFunction.getHousesSuccess(json));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getHomeById(id) {
    return fetch("https://www.anapioficeandfire.com/api/houses/" + id)
        .then(response => response.json())
        .then(json => {
            console.log("House", json);
            store.dispatch(APIFunction.getHouseDetailSuccess(json));
            return json;
        })
        .catch((err) => console.log(''));
}

export function goBack() {
    window.history.back();
}
