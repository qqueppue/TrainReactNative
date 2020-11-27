/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {TextInput, StyleSheet, KeyboardAvoidingView, Button, TouchableOpacity, Text} from 'react-native';

class MyTextInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleEmail = (email) => {
    this.setState({email: email});
  };

  handlePassword = (password) => {
    this.setState({password: password});
  };

  handleLogin = () => {
    // eslint-disable-next-line no-alert
    alert(`email: ${this.state.email}\npassword: ${this.state.password}`);
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled>
        <TextInput
          style={style.TextInput}
          placeholder={'Email'}
          value={this.state.email}
          onChangeText={this.handleEmail}
        />
        <TextInput
          style={style.TextInput}
          placeholder={'Password'}
          value={this.state.password}
          onChangeText={this.handlePassword}
          secureTextEntry
        />
        {/* <Button title="Submit" onPress={this.handleLogin}/> //Button 사용 */}
        {/* <TouchableOpacity>
          <Text children={'Submit'}/>
        </TouchableOpacity> //Submit이라는 text으로 button 영역 생성 (children 지우면 보이지않음) */}
        <TouchableOpacity style={style.submitButton} onPress={this.handleLogin}>
          <Text children={'Submit'} style={style.submitText}/>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const style = StyleSheet.create({
  submitButton: {
    padding: 10,
    margin: 15,
    height: 40,
    backgroundColor: '#7a42f4',
  },
  submitText:{
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  TextInput: {
    margin: 10,
    height: 40,
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
  },
});

export default MyTextInput;
