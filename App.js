
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {useState} from 'react';

export default function App() {

const buttons = ['AC', 'DEL', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 3, 2, 1, '+', 0, '.', '+/-', '=']

const[currentNumber, setCurrentNumber] = useState("")
const[lastNumber, setLastNumber] = useState("")

function calculator(){

  const splitNumbers = currentNumber.split(' ')
  const fistNumber = parseFloat(splitNumbers[0])
  const lastNumber = parseFloat(splitNumbers[2])
  const operator = splitNumbers[1]

  switch(operator){
    case '+':
      setCurrentNumber((fistNumber+lastNumber).toString())
      return
    case '-':
      setCurrentNumber((fistNumber-lastNumber).toString())
      return 
    case '/':
      setCurrentNumber((fistNumber/lastNumber).toString())
      return
    case '*':
      setCurrentNumber((fistNumber*lastNumber).toString())
      return
    
  }

}

function handleInput(buttoPressed){

  if (buttoPressed == '+' | buttoPressed == '-'| buttoPressed == '/' | buttoPressed == '*'){

    setCurrentNumber(currentNumber + " " + buttoPressed + " ")
    return
  } 
  switch(buttoPressed){

    case 'DEL': 
      setCurrentNumber(currentNumber.substring(0,(currentNumber.length -1)))
      return
    case 'AC': 
      setLastNumber("")
      setCurrentNumber("")
      return
    case '=':
      setLastNumber(currentNumber + "=")
      calculator()
      return

  }
  setCurrentNumber(currentNumber + buttoPressed)
} 


  return (
    
    <View>
      <View style={styles.results}>

        <Text style={styles.resultText}>{lastNumber}</Text>
        <Text style={styles.resultHistory}>{currentNumber}</Text>

 
      </View>
      <View style={styles.button}>
        {buttons.map((button) => 
          button === '=' ?
        <TouchableOpacity  key={button} style={styles.buttons} onPress ={() => handleInput(button)} >
          <Text style={styles.textButton}>{button}</Text>
        </TouchableOpacity>
          :
          <TouchableOpacity  key={button} style={[styles.buttons
          ]}>
            <Text style={styles.textButton} onPress ={() => handleInput(button)} >{button}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>

  );
}

const styles = StyleSheet.create({ 
  
  button: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    
     
  },
  buttons:{
    flex: 2,
    alignItems: 'center', 
    justifyContent: 'center',
    minHeight: 90,
    minWidth: 90,
    borderColor: '#3f4d5b',
    borderWidth: 0.2,
    
  },
  resultHistory:{
    fontSize: 30,
    marginRight: 10,
    alignSelf: 'flex-end'

  },
  resultText:{

    margin: 20,
    fontSize: 30

  },

  textButton:{
    color:"#b5b7bb",
    fontSize: 20
  },
  results:{
    
    backgroundColor: "#f5f5f5",
    width: '100%',
    minHeight: 250,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',


  },
});
