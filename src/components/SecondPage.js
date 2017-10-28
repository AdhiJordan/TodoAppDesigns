import React, { Component } from 'react';
import { getRestApiVal, getGenderVal, getCityVal } from '../actions';
import {connect } from 'react-redux';
const gender = ['Male', 'Female'];
const city = ['Chennai', 'Bangalore', 'Mumbai', 'Rajasthan'];
class SecondPage extends Component{
		constructor(args) {
        super(args);
        this.state = {
            apiVal: {
                name: [],
                age: [],
                Occupation: [],
                gender: [],
                City: [],
                country: []
            }
        };
    }

    componentDidMount(e) {
        this.props.getRestApiVal();
    }

    componentWillReceiveProps(newProps) {
        this.setValEmpty();
        if(newProps.resultCame.resultMeta && newProps.resultCame.resultMeta.length !== 0 && 
        newProps.gender.genderVal === undefined && newProps.city.cityVal === undefined){
        newProps.resultCame.resultMeta.map((item) => {
            this.setValArray(item);
        });
        }
        if(newProps.gender.genderVal && (newProps.city.cityVal === undefined || 
            newProps.city.cityVal !== null)){
        if(newProps.gender.genderVal.length !== 0){
            this.setValEmpty();
            var getArray = newProps.gender.genderVal;
            getArray.map((item) => {
                if(item !== null){
                    this.setValArray(item);
                }
            });   
        }
        else if(newProps.gender.genderVal.length === 0){
        newProps.resultCame.resultMeta.map((item) => {
            this.setValArray(item);
        });
        }  
        }

        if(newProps.city.cityVal && (newProps.gender.genderVal !== undefined || 
            newProps.gender.genderVal !== null)){
        if(newProps.city.cityVal.length !== 0 ){
            this.setValEmpty();
            var getArray = newProps.city.cityVal;
            getArray.map((item) => {
                if(item !== null){
                    this.setValArray(item);
                }
            });   
        }
        else if(newProps.city.cityVal.length === 0 && (newProps.gender.genderVal === undefined || 
            newProps.gender.genderVal === null)){

        newProps.resultCame.resultMeta.map((item) => {
            this.setValArray(item);
        });
        }
        } 

    }

    setValEmpty(e){
        this.state.apiVal.name = [];
        this.state.apiVal.age = [];
        this.state.apiVal.Occupation = [];
        this.state.apiVal.gender = [];
        this.state.apiVal.City = [];
        this.state.apiVal.country = []; 
    }

    setValArray(item) {
        this.state.apiVal.name.push(item.name);
        this.state.apiVal.age.push(item.age);
        this.state.apiVal.Occupation.push(item.Occupation);
        this.state.apiVal.gender.push(item.gender);
        this.state.apiVal.City.push(item.City);
        this.state.apiVal.country.push(item.country);
    }

    toggleGenderOccassion(e, item){
        console.log("item", item.target.checked);
        var itemVal = '';
        if(item.target.value  && item.target.checked === true){
            let itemVal = item.target.value;
           this.props.getGenderVal(item.target.value);  
        }
        else{
             this.props.getGenderVal(); 
             this.props.getRestApiVal();
        }
    }

    toggleCityOccassion(e, item) {
        var itemVal = '';
        if(item.target.value  && item.target.checked === true){
            let itemVal = item.target.value;
           this.props.getCityVal(item.target.value);  
        }
        else{
             this.props.getCityVal(); 
        }
    }

    onSendingMail(e){

    }

    render() {
        var displayGenderValues = null;
        displayGenderValues = gender.map((item, i) =>{
            let itemIdx = this.state.apiVal.gender.indexOf(item);
            return (
                <div className="genderValues" style={{paddingLeft: "30px"}} key={"chkeck_" + item + i}>
                    <input type='checkbox' className="genderCheckboxDesign" id={`${item}_check_${i}`}
                        value={item}
                        name="occassionCheckbox"
                        onChange={this.toggleGenderOccassion.bind(this, item)}
                    />
                    <label className="w3-margin-left text-facet-value" htmlFor={`${item}_check_${i}`}>{item}</label>
                </div>
            );
        });
        var displayCityValues = null;
        displayCityValues = city.map((item, i) =>{
            return (
                <div className="genderValues" style={{paddingLeft: "30px"}} key={"chkeck_" + item + i}>
                    <input type='checkbox' className="genderCheckboxDesign" id={`${item}_check_${i}`}
                        value={item}
                        name="occassionCheckbox"
                        onChange={this.toggleCityOccassion.bind(this, item)}
                    />
                    <label className="w3-margin-left text-facet-value" htmlFor={`${item}_check_${i}`}>{item}</label>
                </div>
            );
        });
        var showName = null;
        showName =  this.state.apiVal.name.map((item) => {
            return(
                <div style={{paddingBottom: "10px"}}>{item}</div>
            );
        });
        var showGender = null;
        showGender =  this.state.apiVal.gender.map((item) => {
            return(
                <div style={{paddingBottom: "10px"}}>{item}</div>
            );
        });
        var showCountry = null;
        showCountry =  this.state.apiVal.country.map((item) => {
            return(
                <div style={{paddingBottom: "10px"}}>{item}</div>
            );
        });
        var showCity = null;
        showCity =  this.state.apiVal.City.map((item) => {
            return(
                <div style={{paddingBottom: "10px"}}>{item}</div>
            );
        });
    	return (
            <div>
            <div className="w3-row" style={{height: "50px", background: "#00bfa5"}}>
                <label className="w3-display-topmiddle" style={{color: "#fff"}}>Simple Table Sorter with REST-API</label>
            </div>
    		<div className="w3-row">
                <div className="w3-col m4 l3" style={{border: "1px solid #d3d3d3"}}>
                    <label style={{paddingLeft: "30px", paddingTop: "20px"}} >Gender</label>
                   {displayGenderValues}
                   <div style={{border: "1px solid #000"}}></div> 
                   <label style={{paddingLeft: "30px", paddingTop: "20px"}} >City</label>
                   {displayCityValues}
                   <div style={{border: "1px solid #000"}}></div> 
                    <label style={{paddingLeft: "30px", paddingTop: "20px"}} >NOTE</label>
                       <p style={{paddingLeft: "30px"}}>                
                        *Combination of API Filters not working.<br />
                        *Try with Single Filter Values.
                       </p>
                   <div style={{border: "1px solid #000"}}></div> 
                    <label style={{paddingLeft: "30px", paddingTop: "20px"}} >Send To E-Mail</label>
                   <form onSubmit={this.onSendingMail.bind(this)}>
                    <input className="w3-input" placeholder="E-Mail Address here..."
                    style={{border: "1px solid #000"}} type="text" />
                    <button className="w3-button w3-black" style={{width: "100%"}}>Let's Go</button>
                   </form>
                   <div style={{border: "1px solid #000"}}></div> 
                </div>
                <div className="w3-col m8 l9" style={{border: "1px solid #d3d3d3"}}>
                  <table className="w3-table w3-striped">
                    <tr>
                      <th>Name</th>
                      <th>Gender</th>
                      <th>Country</th>
                      <th>City</th>
                    </tr>
                    <tr>
                      <td>{showName}</td>
                      <td>{showGender}</td>
                      <td>{showCountry}</td>
                      <td>{showCity}</td>
                    </tr>
                  </table>
                </div>
    			
    		</div>
            
            </div>
    	);
    }
}


const mapStateToProps = (state) => {
  return {
      resultCame: state.getDataApplication,
      gender: state.getGender,
      city: state.getCity
  };
}

export default connect(mapStateToProps, {
  getRestApiVal: getRestApiVal,
  getGenderVal: getGenderVal,
  getCityVal: getCityVal

})(SecondPage);