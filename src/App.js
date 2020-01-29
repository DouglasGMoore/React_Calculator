import React from 'react';
import './App.css';
import Screen from './components/screen';
import Buttons from './components/buttons';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      result:''
    }

  }
  onClick= button =>{
    if(button === '='){
      this.calculate();
    } else if( button ==='C'){
      this.delete();
    }else if(button === 'CE'){
      this.reset();
    }else {
      this.setState({
        result: this.state.result + button
      })
      
    }
  }
 
  calculate=()=>{
    try{
      this.setState({
        // eslint-disable-next-line no-eval
        result: (eval(this.state.result) || '')+""
      })
    } catch (e){
      this.setState({
        result: 'error'
      })
    }
    
  };
  reset=()=>{
    this.setState({
      result:''
    })
  };
  delete=()=>{
    this.setState({
      result:this.state.result.slice(0,-1)
    })
  };
  
  render(){
    return (
      <div className="App">
        <Screen result={this.state.result}/>
        <Buttons onClick={this.onClick}/>
      </div>
    );
  } 
}

export default App;
