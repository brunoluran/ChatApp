import { PressableView, KeyboardAvoidingView, Container, ViewLogo, PressableText } from './style';
import { useState } from 'react';
import { Keyboard } from 'react-native';
import firebase from '../../firebase';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import Pressable from '../../components/Pressable';
import TextBold from '../../components/TextBold';
import TextRegular from '../../components/TextRegular';

export default function Register() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signUp, setSignUp] = useState(false);

  async function handleClick(data) {
    if (signUp) {
      if (name === '' || email === '' || password === '') return;
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          user.user.updateProfile({
            displayName: name,
          });
        })
        .then(() => {
          navigation.goBack();
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
        });
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          navigation.goBack();
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
        });
    }
  }

  return (
    <PressableView onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : null}>
        <Container>
          <ViewLogo>
            <TextBold size={30}>HeyGrupos</TextBold>
            <TextRegular>Ajude, colabore, faça networking!</TextRegular>
          </ViewLogo>
          {signUp && (
            <Input
              value={name}
              onChangeText={(e) => setName(e)}
              placeholder='Nome'
              autoCapitalize='words'
              keyboardType='default'
            />
          )}

          <Input
            value={email}
            onChangeText={(e) => setEmail(e)}
            placeholder='Email'
            autoCorrect={false}
            autoCapitalize='none'
            keyboardType='email-address'
          />

          <Input
            value={password}
            onChangeText={(e) => setPassword(e)}
            placeholder='Senha'
            autoCorrect={false}
            autoCapitalize='none'
            secureTextEntry={true}
          />

          <Pressable text={signUp ? 'Cadastrar' : 'Acessar'} onPress={() => handleClick()} />
          <PressableText onPress={() => setSignUp(!signUp)}>
            <TextBold size={14}>
              {signUp ? 'Já possuo uma conta' : 'Cadastrar uma nova conta'}
            </TextBold>
          </PressableText>
        </Container>
      </KeyboardAvoidingView>
    </PressableView>
  );
}
