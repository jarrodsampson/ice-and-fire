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

export function getAllCharacters(page, size) {
    return fetch("https://www.anapioficeandfire.com/api/characters?page=" + page + "&pageSize=" + size)
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

export function getAllHouses(page, size) {
    return fetch("https://www.anapioficeandfire.com/api/houses?page=" + page + "&pageSize=" + size)
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
            if (json.overlord.length > 0) {
                getOverlord(json.overlord);
            }
            if (json.founder.length > 0) {
                getFounder(json.founder);
            }
            if (json.currentLord.length > 0) {
                getCurrentLord(json.currentLord);
            }
            if (json.swornMembers.length > 0) {
                getSwornMembers(json.swornMembers);
            }
            return json;
        })
        .catch((err) => console.log(''));
}

export function getOverlord(overlord) {
    return fetch(overlord)
        .then(response => response.json())
        .then(json => {
            console.log("Overlord", json);
            store.dispatch(APIFunction.getOverLordSuccess(json));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getFounder(founder) {
    return fetch(founder)
        .then(response => response.json())
        .then(json => {
            console.log("Founder", json);
            store.dispatch(APIFunction.getFounderSuccess(json));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getCurrentLord(lord) {
    return fetch(lord)
        .then(response => response.json())
        .then(json => {
            console.log("Current Lord", json);
            store.dispatch(APIFunction.getCurrentLordSuccess(json));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getSwornMembers(members) {
    var sworn = [];
    for (var i = 0; i < members.length; ++i) {
        fetch(members[i])
            .then(response => response.json())
            .then(json => {
                sworn.push(json);
                console.log("Sworn Members", sworn);
            })
            .catch((err) => console.log(''));
    }

    store.dispatch(APIFunction.getSwornSuccess(sworn));
    return sworn;
}

export function goBack() {
    window.history.back();
}
