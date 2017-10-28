export const GET_API_DATA = 'GET_API_DATA';
export const DELETE_API_DATA = 'DELETE_API_DATA';
export const GET_GENDER_DATA = 'GET_GENDER_DATA';
export const DELETE_GENDER_DATA = 'DELETE_GENDER_DATA';
export const GET_CITY_DATA = 'GET_CITY_DATA';
export const DELETE_CITY_DATA = 'DELETE_CITY_DATA';




export const getRestApiVal = (val) => {
	console.log("maggie", val);
	if(val !== null) {
	return (d) => {
	fetch('http://localhost:4039/api/setUpTodos').then((res) => {
    	res.json().then((response) => {
    		console.log("cehck the res--->", response);
    		return d({
	    		type :GET_API_DATA , 
	    		response
	    	});
    	});
    });
	} 

	}
	else{
		return (d) => {
			return d({
				type: DELETE_API_DATA
			});
			
		};	
	}

}


export const getGenderVal = (val) => {
	if(val !== null && val !== undefined){
	return (d) => {
	
	fetch('http://localhost:4039/api/gender/' +val).then((res) => {
    	res.json().then((response) => {
    		return d({
	    		type :GET_GENDER_DATA , 
	    		response
	    	});
    	});
    });	
	}
	}
	else{
		return (d) => {
			return d({
				type: DELETE_GENDER_DATA
			});
			
		};
	}
} 


export const getCityVal = (val) => {
	if(val !== null && val !== undefined){
	return (d) => {
	
	fetch('http://localhost:4039/api/city/' +val).then((res) => {
    	res.json().then((response) => {
    		return d({
	    		type: GET_CITY_DATA , 
	    		response
	    	});
    	});
    });	
	}
	}
	else{
		return (d) => {
			return d({
				type: DELETE_CITY_DATA
			});
			
		};
	}
} 

		// axios({
	 //      method:'GET',
	 //      url:'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SPY&apikey=2QEL3WC4KITIBISR',
	 //    }).then((response)=>{
	 //    	return d({
	 //    		type :GET_API_DATA , 
	 //    		response}
	 //    		);
	 //    }).catch((e) => {
	 //    	console.log("e", e);
	 //    });

// export const addTodo = text => {
//   return {
//     type: 'GET_TODO_DATA',
//     text
//   }
// }