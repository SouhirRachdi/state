import React from "react";

import './App.css';
import Home from "./components/Home";
import Protfolio from "./components/Protfolio";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state= {
    TimerApp:0
  };
  }
   componentDidMount(){
     console.log("hello")
    this.interval=setInterval(()=>this.setState({TimerApp:this.state.TimerApp+1}),1000)
   }
   render(){
     return (
       <div style={{backgroundColor:"black" }} className="App">
      <Home/>
     <Protfolio/>
<h2 style={{color:"#fff"}} >{this.state.TimerApp}</h2>
       </div>

     );
   }
 
  }

export default App;
