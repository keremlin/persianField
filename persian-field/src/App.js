//import logo from './logo.svg';
import './App.css';
import Persianfield from './components/persianfield';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={state:'-',value:''};
  }
  
  callbackFunction = (state,value) => {
    this.setState({state: state,value:value})
  }
render(){  
return (
    <div class="row">
      <div class="col-md-4"><span>{this.state.value}</span><p><span>{this.state.state+'-'}</span></p></div>
      <div class="col-md-4">
        <div>

          <Persianfield
            identity="controlID"
            type="mobilePhone"//phone email nin text mobilePhone
            title="موبایل"
            placeholder="09xxxxxxxxx"
            onErrorMessage="تلفن را صحیح وارد کنید"
            onRecoveryMessage="نام صحیح است" 
            helperMessage="شماره تلفن"
            regex=""
            callback={this.callbackFunction}
          ></Persianfield>
          <Persianfield
            identity="controlID2"
            type="text"//phone email nin text mobilePhone
            title="نام"
            onRecoveryMessage="نام صحیح است" 
            regex=""
          ></Persianfield>
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
   
        
)};
}

export default App;
