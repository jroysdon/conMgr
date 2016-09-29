import { PROFILE_LOADED, PROFILE_SAVED } from '../actions';


const initialState =  {
  fetching: false,
  fetched: false,
  profile: {}
};

export default function ProfileReducer (state = initialState, action) {
  // debugger;
  console.log("Action :" + action.type);
    switch (action.type) {
        case PROFILE_LOADED:

        console.log('PROFILE_LOADED');
          return{
              ...state,
              fetching: false,
              fetched: true,
              profile: action.payload
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

//export default ProfileReducer
