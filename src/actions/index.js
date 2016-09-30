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
export const PROFILE_LOADED = 'PROFILE_LOADED';
export const PROFILE_SAVED = 'PROFILE_SAVED';


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

export function signUpUser(credentials) {
    return function(dispatch) {
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        }
        var position = {
            latitude: null,
            longitude: null
        }

        function setPosition(position) {
            var locale = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
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
            var point = new Parse.GeoPoint(locale);
            user.set("location", point);
            user.signUp(null, {
                    success: function(user) {
                        //                        console.log(' Hooray! Let them use the app now.');
                        browserHistory.push('/');
                    },
                    error: function(user, error) {
                        // Show the error message somewhere and let the user try again.
                        dispatch(authError(error));
                    }
                },
                function(error) {
                    // saving the object failed.
                    dispatch(authError(error));

                }
            );

        }


        function showError(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    console.log("User denied the request for Geolocation.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    console.log("Location information is unavailable.");
                    break;
                case error.TIMEOUT:
                    console.log("The request to get user location timed out.");
                    break;
                case error.UNKNOWN_ERROR:
                    console.log("An unknown error occurred.");
                    break;
            }
        }

        if (navigator.geolocation) {
            //get Coord's from browser
            navigator.geolocation.getCurrentPosition(setPosition, showError, options);
            //    } if (addressComplete ) {
            // get coordinates from profile address

        } else {
            console.log("Geolocation is not supported by this browser.");
        }

    }
}

export function signInUser(credentials) {
    return function(dispatch) {
        Parse.User.logIn(credentials.username, credentials.password, {
            success: function(user) {
                var userID = user.id;
                var nameFirst = user.get("nameFirst");
                console.log('Login name: ' + nameFirst);
                dispatch({
                    type: SIGN_IN_USER,
                    nameFirst: nameFirst,
                    userID: userID
                });
                browserHistory.push('/');

            },
            error: function(username, error) {
                // The login failed. Check error to see why.
                dispatch(authError(error));
            }
        });
    }
}

export function authenticateUser() {
    return function(dispatch) {
        var currentUser = Parse.User.current();
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
    Parse.User.logOut().then(() => {
        browserHistory.push('/');

    })
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

export function loadProfile() {
    return function(dispatch) {
        console.log('loadProfile');
        var userID = Parse.User.current();
        var User = Parse.Object.extend("User");
        var query = new Parse.Query(User);
        console.log('starting Qry');
        query.get(userID.id).then(

            function(profile) {
                // The object was retrieved successfully.
                console.log('query : ' + profile.get("username"));
                const profileData = {
                    username: profile.get("username"),
                    nameFirst: profile.get("nameFirst"),
                    nameLast: profile.get("nameLast"),
                    address: profile.get("address"),
                    city: profile.get("city"),
                    state: profile.get("state"),
                    zip: profile.get("zipcode"),
                    tel: profile.get("phoneNumber"),
                    email: profile.get("email"),
                    geopoint: profile.get("location")
                }
                console.log('profileData : ' + profileData.nameFirst)
                console.log('Dispatching PROFILE_LOADED');
                dispatch({
                    type: PROFILE_LOADED,
                    payload: profileData
                });
            },
            function(object, error) {
                // The object was not retrieved successfully.
                // error is a Parse.Error with an error code and message.
                dispatch(authError(error));
                console.error(error)
            }
        );
    }
}

export function saveProfile(ProfileData) {
    return function(dispatch) {
        console.log('saveProfile');
        var userID = Parse.User.current();
        var User = Parse.Object.extend("User");
        var query = new Parse.Query(userID);
        console.log('starting Save for userID :' + userID.id);
        query.get(userID.id).then(
            function(profile) {
                profile.set("username", ProfileData.username);
                // if email has changed, add logic to reset the email verified flag
                //          profile.set("email", ProfileData.email);
                //
                profile.set("nameFirst", ProfileData.nameFirst);
                profile.set("nameLast", ProfileData.nameLast);
                profile.set("address", ProfileData.address);
                profile.set("city", ProfileData.city);
                profile.set("state", ProfileData.state);
                profile.set("zipcode", ProfileData.zip);
                profile.set("phoneNumber", ProfileData.tel);


                profile.save();
                browserHistory.push('/');


            },
            function(result, error) {
            // An error occurred.

            console.error(ParseError)
            dispatch(authError(ParseError.message ));
          }

        )
    }
}
