import * as types from './action-types';

export function getBooksSuccess(books) {
    return {
        type: types.GET_BOOKS_SUCCESS,
        books
    };
}

export function getBookDetailSuccess(book) {
    return {
        type: types.GET_BOOK_DETAIL_SUCCESS,
        book
    };
}

export function getCharactersSuccess(characters) {
    return {
        type: types.GET_CHARCTERS_SUCCESS,
        characters
    };
}

export function getCharacterDetailSuccess(character) {
    return {
        type: types.GET_CHARACTER_DETAIL_SUCCESS,
        character
    };
}

export function getHousesSuccess(houses) {
    return {
        type: types.GET_HOUSES_SUCCESS,
        houses
    };
}

export function getHouseDetailSuccess(house) {
    return {
        type: types.GET_HOUSE_DETAIL_SUCCESS,
        house
    };
}

export function getOverLordSuccess(overlord) {
    return {
        type: types.GET_OVERLORD_SUCCESS,
        overlord
    };
}

export function getFounderSuccess(founder) {
    return {
        type: types.GET_FOUNDER_SUCCESS,
        founder
    };
}

export function getCurrentLordSuccess(currentLord) {
    return {
        type: types.GET_CURRENT_LORD_SUCCESS,
        currentLord
    };
}

export function getSwornSuccess(sworn) {
    return {
        type: types.GET_SWORN_SUCCESS,
        sworn
    };
}