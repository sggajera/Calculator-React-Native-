/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, 
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';


export default class App extends Component {

  constructor(){
    super()
    this.state={}
    this.state.numberView=''
    this.state.finalResult=''
    this.buttonClicked=this.buttonClicked.bind(this)

  }

  buttonClicked(text){
    let strCheck=this.state.numberView
    let strlen= strCheck.length
    let operator=['+','-','*','/','.']
   
    if(text== '='){
            if(operator.includes[strCheck[strlen-1]]){
              this.state.numberView=strCheck.slice(0,-1)
            }
            this.state.finalResult=eval(this.state.numberView)
            this.setState({
            finalResult:this.state.finalResult,
            numberView:''
            }) 
        }
    
    else if(operator.includes(text)){
        if(operator.includes(strCheck[strlen-1]))
          { }
        else{
          this.setState({
          numberView: this.state.numberView + text.toString(),
          })
        }   
      }
    else{
          if(text=='D'){ 
            this.setState({numberView:(this.state.numberView).toString().slice(0,-1)})
          }
          else if(text=='C'){
            this.setState({numberView:'',finalResult:''})
          }
          else{
            this.setState({ numberView: this.state.numberView + text.toString()})
        }
      }  
  }

  render() {

    let rows=[]
    let getViews=[]
    let btnNo=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [9,10,11]]
    const buttons=[
      [1,2,3],
      [4,5,6],
      [7,8,9],
      ['.',0,'='],
      ['+','-','*'],
      ['/','C','D']
  ];

    for(let i=0;i<6;i++){
      for(let j=0;j<3;j++){rows.push(
        <TouchableOpacity style={styles.buttons} onPress={()=>this.buttonClicked(buttons[i][j])}>
                        <Text style={styles.numStyle}>{buttons[i][j]}</Text>
        </TouchableOpacity>)
      }
    }
    
    for(let i=0;i<4;i++){
        getViews.push(
            <View style={styles.numberRow}>
              {rows[btnNo[i][0]]}
              {rows[btnNo[i][1]]}
              {rows[btnNo[i][2]]}
            </View> 
        )   
    }

    return (
      <View style={styles.container}>
        <View style={styles.showText}>
            <Text style={styles.showTextStyle}>{this.state.numberView}</Text>
        </View>

        <View style={styles.answerText}>
            <Text style={styles.answerTextStyle}>{this.state.finalResult}</Text>
        </View>

        <View style={styles.buttonView}>
            <View style={styles.numbers}>
                <View style={styles.numberRow}>
                    {rows[16]}
                    {rows[17]}
                </View>
                    {getViews} 
                
            </View>
                <View style={styles.operations}>                
                    {rows[12]}
                    {rows[13]}
                    {rows[14]} 
                    {rows[15]}
                </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
 
  },
  showText:{
    flex:2,
    backgroundColor:'black',
    justifyContent:'flex-end',
    alignItems:'flex-end',
  },

  answerText:{
    flex: 1,
    justifyContent:'flex-end',
    alignItems:'flex-end',
    backgroundColor:'white'
  },

  buttonView:{
    flex:5,
    backgroundColor:'darkgrey',
    flexDirection:'row'
  },

  numbers:{
    flex:3,
  },

  operations:{
    flex:1,
    backgroundColor:'orange'
  },

  numberRow:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'darkgrey',
    justifyContent:'center'
  },

  buttons:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:0.5,
    borderBottomWidth:0,
    borderColor:'grey',
  },

  numStyle:{
    fontSize:25,
    color: 'white'
  },

  showTextStyle:{
    fontSize:30,
    color:'white'
  },

  answerTextStyle:{
    fontSize:30,
    color:'black'
  }
});
