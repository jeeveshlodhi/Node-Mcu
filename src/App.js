import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from "./firebase";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      led_status : "OFF" 
    }
  }

  componentDidMount(){
    const wordRef = firebase.database().ref('LED_STATUS');
    wordRef.on('value',(snapshot)=> {
      let led = snapshot.val();
      this.setState({led_status : led});
    })
  }
  
  changeStatus = () => {
    if(this.state.led_status == "OFF"){
      this.setState({led_status:"ON"});
      const status = firebase.database().ref().update({"LED_STATUS":"ON"});
    }
    else{
      this.setState({led_status:"OFF"});
      const status = firebase.database().ref().update({"LED_STATUS":"OFF"});
    }
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button  className="btn" onClick={this.changeStatus}>LED</button>
          
          <button  className="btn"> {this.state.led_status} </button>
          
        </header>
      </div>
    );
  }
}

export default App;
