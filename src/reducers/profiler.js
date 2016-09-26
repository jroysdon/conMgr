import { PROFILE_LOADED, PROFILE_SAVED } from '../actions';

const initialState =  {
  fetching: false,
  fetched: false,
  profile: {
    username: 'homer',
    nameFirst: null,
    nameLast: null,
    address: null,
    city: null,
    state: null,
    zip: null,
    tel: null,
    email: null
  },
  error:null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_LOADED:
          return{
              ...state,
              fetching: false,
              fetched: true,
              profile: action.profileData
          }


        case PROFILE_SAVED:
            return state

        default:
            return state
    }
}

// export const load = data => ({
//     type: PROFILE_LOADED,
//     data
// })

export const load = profile => ({
    type: PROFILE_LOADED,
    profile
})

export default reducer
