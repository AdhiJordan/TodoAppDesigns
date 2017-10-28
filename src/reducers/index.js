import { combineReducers } from 'redux'

import {
GET_API_DATA,
DELETE_API_DATA,
GET_GENDER_DATA,
DELETE_GENDER_DATA,
GET_CITY_DATA,
DELETE_CITY_DATA
} from '../actions';

function getDataApplication(state = [], action) {
    const arrayNull = [];
  switch (action.type) {
    case GET_API_DATA:

      return {
          resultMeta: action.response, 
  	  }
    case DELETE_API_DATA:

      return {
          resultMeta: arrayNull, 
      }
    default:
      return state
  }
}
function getGender(state = [], action) {
  const arrayNull = [];
  switch (action.type) {
    case GET_GENDER_DATA:

      return {
          genderVal: action.response, 
      }

      case DELETE_GENDER_DATA:
      return {
          genderVal: arrayNull, 
      }

    default:
      return state
  }
}

function getCity(state = [], action) {
  console.log("action", action.type);
  const arrayNull = [];
  switch (action.type) {
    case GET_CITY_DATA:

      return {
          cityVal: action.response, 
      }

      case DELETE_CITY_DATA:
      return {
          cityVal: arrayNull, 
      }

    default:
      return state
  }
}
// function deleteGenderVal(state = [], action) {
//   console.log("wtf---", state);
//   switch (action.type) {
//     case GET_GENDER_DATA:
//       return {
//           genderVal: state, 
//       }

//     default:
//       return state
//   }
// }


const dataApp = combineReducers({
	getDataApplication,
  getGender,
  getCity
})

export default dataApp
