import request from 'superagent';
import {
    browserHistory
} from 'react-router';

import Parse from 'Parse';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const REQUEST_GIFS = 'REQUEST_GIFS';
export const FETCH_FAVORITED_GIFS = 'FETCH_FAVORITED_GIFS';
export const SIGN_IN_USER = 'SIGN_IN_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';
export const AUTH_ERROR = 'AUTH_ERROR';

const API_URL = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY = '&api_key=dc6zaTOxFJmzC';

Parse.initialize("cmparseserver");
Parse.serverURL = "https://cmparseserver.herokuapp.com/parse";

export function requestGifs(term = null) {
    return function(dispatch) {
        request.get(`${API_URL}${term.replace(/\s/g, '+')}${API_KEY}`).then(response => {
            dispatch({
                type: REQUEST_GIFS,
                payload: response
            });
        });
    }
}

export function favoriteGif({
    selectedGif
}) {
    console.log('selectedGif' + selectedGif);
    const userRef = Parse.User.current();
    console.log('userRef' + userRef);
    const gifId = selectedGif.id;
    return dispatch => userRef.update({
        [gifId]: selectedGif
    });

    return selectedGif;
}

export function unfavoriteGif({
    selectedGif
}) {
    const userRef = Parse.User.current();
    const gifId = selectedGif.id;
    return dispatch => userRef.child(gifId).remove();
    return selectedGif;

}

export function fetchFavoritedGifs() {
    return function(dispatch) {
        const userRef = Parse.User.current();
        userRef.on('value', snapshot => {
            dispatch({
                type: FETCH_FAVORITED_GIFS,
                payload: snapshot.val()
            })
        });
    }
    return [];
}

export function openModal(gif) {
    return {
        type: OPEN_MODAL,
        gif
    }
}

export function closeModal() {
    return {
        type: CLOSE_MODAL
    }
}

export function getLocation(position) {
    var position = {
        latitude: null,
        longitude: null
    };
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position);
        // console.log(location.coords.latitude);
        position.latitude = location.coords.latitude;
        // console.log(location.coords.longitude);
        position.longitude = location.coords.longitude;
        console.log(position);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
    return position;

}

export function signUpUser(credentials) {
    return function(dispatch) {
        var user = new Parse.User();
        user.set("username", credentials.username);
        user.set("password", credentials.password);
        user.set("email", credentials.email);
        //    other fields can be set just like with Parse.Object
        user.set("nameFirst", credentials.nameFirst);
        user.set("nameLast", credentials.nameLast);
        user.set("address", credentials.address);
        user.set("city", credentials.city);
        user.set("state", credentials.state);
        user.set("zipcode", credentials.zip);
        user.set("phoneNumber", credentials.tel);
        user.set("tNc", credentials.tNc);
        user.set("emailverified", false);

        var position = getLocation(location, function() {
            var point = new Parse.GeoPoint(position);
            debugger;
            user.set("location", point);
            user.signUp(null, {
                    success: function(user) {
                        console.log(' Hooray! Let them use the app now.');
                        dispatch(signInUser(credentials.username, credentials.password));
                    },
                    error: function(user, error) {
                        // Show the error message somewhere and let the user try again.
                        dispatch(authError(error));
                    }
                },
                function(error) {
                    // saving the object failed.
                    dispatch(authError(error));

                });
        });
    };
}

export function signInUser(credentials) {
    return function(dispatch) {
        Parse.User.logIn(credentials.email, credentials.password, {
            success: function(user) {
                var userID = user.id;
                var nameFirst = user.get("nameFirst");
                console.log('Login name: ' + nameFirst);
                dispatch({
                    type: SIGN_IN_USER,
                    nameFirst: nameFirst,
                    userID: userID
                });
                // console.log(authData);
                // browserHistory.push('/favorites');
                browserHistory.push('/');

            },
            error: function(username, error) {
                // The login failed. Check error to see why.
                // console.log('Login: Error: ' + error.message);
                dispatch(authError(error));
            }
        });
    }
}

export function authenticateUser() {
    return function(dispatch) {
        var currentUser = Parse.User.current();
        // debugger;
        if (currentUser) {
            var userID = currentUser.id;
            var nameFirst = currentUser.get("nameFirst");
            console.log('Auth UserID :' + userID);
            console.log('Auth name: ' + nameFirst);
            dispatch({
                type: SIGN_IN_USER,
                nameFirst: nameFirst,
                userID: userID
            });
        } else {
            dispatch(signOutUser());
        }
    }
}

export function signOutUser() {
    browserHistory.push('/');
    return {
        type: SIGN_OUT_USER
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}
