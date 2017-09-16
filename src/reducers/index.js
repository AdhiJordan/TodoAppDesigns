import { combineReducers } from 'redux'

import {
GET_TODO_DATA
} from '../actions';


function getDataApplication(state = [], action) {
	console.log("check the data", action.text);
	// var getVal = action.text.map((item) => {
	// 	return item;
	// });
  switch (action.type) {
    case GET_TODO_DATA:

      return {
      	todo: [
        ...state,
        {
          resultMeta: action.text,
         
        }
      ]
  	}

    default:
      return state
  }
}



const dataApp = combineReducers({
	getDataApplication
})

export default dataApp
