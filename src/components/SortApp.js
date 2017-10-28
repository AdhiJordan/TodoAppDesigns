import React, { Component } from 'react';
import SecondPage from './SecondPage';
import styles from '../../style/style.css';
export default class SortApp extends Component{
	constructor(args) {
        super(args);
        this.state = {
        	 jsonReturnedValue: [],
             toggle: true
        };
    }
  // componentDidMount() {
  //   fetch('http://localhost:4007/api/setUpTodos').then((res) => {
  //   	res.json().then((json) => {
  //   		 this.state.jsonReturnedValue.push(json);
  //            console.log("hai", json);
  //   	})
  //   });
  //     console.log("check the value", this.state.jsonReturnedValue);
  // }
  nextPage(e){
    this.setState({toggle: false});
  }

    render() {
    	return(
            <div>
            {this.state.toggle ?
            <div>
            <div className="w3-container" style={{position: "relative",top: "250px"}}>
            <div className="w3-center"  style={{border: "1px solid #7850dd", 
             margin: "0px auto"}}>
                <div className="w3-container">
                    <div  className="w3-row" style={{}}>
                        <p style={{backgroundColor: "#d3d3d3", textAlign: "center", fontSize: "20px", fontFamily: "ProximaNova"}}>
                            Welcome to Table Data Sorter
                        </p>
                    </div>
                    <button onClick={this.nextPage.bind(this)}
                    className="w3-button w3-black">Let's Go</button>
                </div>
            </div> 
            </div>
            </div>:
            <SecondPage />
            }

            </div>
    	);
    }
}