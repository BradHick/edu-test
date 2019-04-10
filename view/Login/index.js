import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, KeyboardAvoidingView } from 'react-native';
import {Container, Title, Label, TextInput, FormGroup, Button, Content} from './Components';
import container from './container';
import Key from '../../assets/key.png';
import Mail from '../../assets/mail.svg';
import Eye from '../../assets/eye.svg';



class Login extends Component {

  static navigationOptions = ({navigation}) =>({
    header: null
  });

  goToEvents = () => {
    this.props.navigation.navigate('Events');
  };
  render = () => (
    <Container>
      <Content>
        <View>
          <Title>Faça seu login <Image source={Key} style={styles.image}/></Title> 
          <FormGroup>
            <Label>E-mail ou usuário</Label>
            <TextInput icon={Mail}/>
          </FormGroup>
          <FormGroup>
            <Label>Senha</Label>
            <TextInput secureTextEntry={true} icon={Eye}/>
          </FormGroup>
        </View>
      </Content>
      <FormGroup>
        <Button onPress={this.goToEvents}>
          <Text style ={styles.textButton}>Enviar</Text>
        </Button>
      </FormGroup>
    </Container>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  text: {
    fontSize: 60,
  },
  textButton: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff'
  },
  image: { 
    height:25,
    width:25
  }
});


export default container(Login);