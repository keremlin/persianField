import React from 'react'
import styles from './persianfield.module.css'

class Persianfield extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hidden:true,
            [this.props.identity]:' '
        };
    }
    selectTypeOfRegex=()=>{
            switch(this.props.type) {
                case 'text':
                 return [
                            /^[\u0600-\u06FF\u08A0-\u08FF\s]+$/i
                        ]
                case 'number':
                return [
                            /^\d+$/ // find none digit
                        ]        
                  case 'nin':
                  return[
                            /^\d{10}$/ // find nin digit
                        ]
                    case 'mobilePhone':
                  return[
                            /^\s*[0][9]\d{9}$/ // mobile number like 09183134346
                        ]
                    case 'phone':
                  return[
                            /^\s*[0][1-8]\d{9}$/ // phone number like 09183134346
                        ]
                default://text
                 return [
                            /^[\u0600-\u06FF\u08A0-\u08FF\s]+$/i
                        ]
              }
    }

    fieldValidation = function (values){// return true if field is valid
        let exit=true;//return value
        let stat={ hidden:true};//def true
        // array of patterns
        let patterns=this.selectTypeOfRegex();
        // for each patern do work on each field
        patterns.forEach(function(item,index,array){
          // create new regex with current pattern
          var patt=new RegExp(item);
          //check the pattern and length
          if(!patt.test(values)){
            stat.hidden=false;
            exit=false;
          }
        });//end of foreach
        this.setState(stat);
        return exit;
      }

      onChangeHandler= (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]:val});
        this.fieldValidation(val);
      }

    render(){
        return(
            <div>
                <label for={this.props.identity}>{this.props.title}</label>
                <input class="form-control" name={this.props.identity} id={this.props.identity} onChange={this.onChangeHandler} type="text" aria-describedby={this.props.identity+"help"} placeholder={this.props.placeholder}></input>
                <small id={this.props.identity+"help"}  class="form-text text-muted">{this.props.helperMessage}</small>
                <div class={styles.errr} role="alert" hidden={this.state.hidden}>
                    {this.props.onErrorMessage}
                </div>
            </div>
        )
    }
    
}
export default Persianfield;
