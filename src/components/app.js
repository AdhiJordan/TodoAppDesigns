import React, { Component } from 'react';
import {connect } from 'react-redux';
import { addTodo } from '../actions';

class App extends Component {
	    constructor(args) {
        super(args);
        this.state = {
           dataMaintain: [],
           toggleDisplayData: true,
           globalError: false,
           successCreation: false,
           finalTodo: true
        };
    }

    formSubmit(e) {
    	e.preventDefault();
    	var dataMaintain = this.state.dataMaintain;
    	var setData = this.refs.inputVal.value;
    	var globalError = this.state.globalError;
    	var successCreation = this.state.successCreation;
    	if(setData === '') {
    		this.setState({globalError: true});
    	}
    	else {
    	dataMaintain.push(setData);
    	var setDataArr = this.state.dataMaintain.map((item) => {
    		return item;
    	});
    	this.setState({
    		globalError: false,
    		successCreation: true
    	});
    	this.props.addTodo(setDataArr);
    	this.refs.inputVal.value = '';
    	}	

    }

    checkData(e) {
    	var toggleDisplayData = this.state.toggleDisplayData;
    	this.setState({toggleDisplayData: false});
    }

    createData(e) {
    	var toggleDisplayData = this.state.toggleDisplayData;
    	this.setState({toggleDisplayData: true});
    }

    displayData(e) {
    	var toggleDisplayData = this.state.toggleDisplayData;
    	var finalTodo = this.state.finalTodo;
    	this.setState({
    		toggleDisplayData: false,
    		finalTodo: false

    	});
    }

    onItemClick(e){
    	var dataMaintain = this.state.dataMaintain;
    	var getIdx = this.state.dataMaintain.indexOf(e);
    	this.state.dataMaintain.splice(getIdx, 1);
    	console.log("get the final data", this.state.dataMaintain);
    }
    inputValChange(e) {
    	var globalError = this.state.globalError;
    	if(e.target.value != ''){
    		this.setState({globalError: false});
    	}
    }


  render() {
  	var dataMaintain = this.state.dataMaintain;
  	var todoVal = [], finalData = [];
	for(var key in this.props.resultCame) {
	    if(this.props.resultCame.hasOwnProperty(key)) {
	        var value = this.props.resultCame[key];
	        var getVal = value[0].resultMeta.map((item, idx) => {
	        	return  todoVal.push(
					<div>
						<input type="checkbox" style={{marginRight: "1%"}} 
						onChange={this.onItemClick.bind(this, item)}/>
						{item}
					</div>
					);
	        });
	    }
	}
	var finalVal = this.state.dataMaintain.map((item) => {
		return finalData.push(
				<div>
					<li>
						{item}
					</li>
				</div>
				);
	});

    return (
    <div>
    	{this.state.toggleDisplayData ?
    	<div style={{paddingTop: "30vh"}}>
    	<div className="w3-container" style={{width: "800px", background: "#d3d3d3", margin: "0px auto"}}>
		      	<div className="w3-panel w3-black">
		      	<p className="w3-center">SIMPLE TODO APPLICATION</p>
		    </div>
		    <form className="" onSubmit={this.formSubmit.bind(this)} >
			    <input type="w3-input" className="w3-left" 
			    onChange={this.inputValChange.bind(this)}
			    style={{width: "650px", height: "40px"}}
			    placeholder="Enter some data" ref="inputVal" />
			    <button 
			    className="w3-button w3-green w3-left" >Submit</button>
		    </form>
		      <button className="w3-button w3-green"  style={{marginTop: "2%"}} 
		      onClick={this.checkData.bind(this)}>Check the data</button>
      		{this.state.globalError ?
	      		<p className="w3-center" style={{color: "#ff0000"}}>Please enter some data</p>:
	      		<div>
	      		{this.state.successCreation?
	      			<p className="w3-center w3-green" style={{marginTop: "2%"}}>Data is created Successfully!</p>:
	      			null
	      		}
	      		</div>
      		}
      </div>
      </div> :
      <div>
      {this.state.finalTodo ?
	    <div style={{paddingTop: "30vh"}}>
	    <div className="w3-container" style={{width: "800px", background: "#d3d3d3", margin: "0px auto"}}>
	      	<div className="w3-center">{todoVal}</div>
	      	<button className="w3-button w3-green w3-left" 
	      	onClick={this.createData.bind(this)}>CREATE NEW DATA</button>
	      	<button className="w3-button w3-black w3-right" 
	      	onClick={this.displayData.bind(this)}>DISPLAY NEW DATA</button>
	    </div>
	    </div>
       :
      <div style={{paddingTop: "30vh"}}>
      <div className="w3-container" style={{width: "800px", background: "#d3d3d3", margin: "0px auto"}}>
      		<div className="w3-panel w3-black">Show Final Todo Data</div>
      		<div className="w3-center">{finalData}</div>
      </div>
      </div>
     }
     </div>
  	}
     </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
      resultCame: state.getDataApplication,
  };
}

export default connect(mapStateToProps, {
  addTodo: addTodo,

})(App);