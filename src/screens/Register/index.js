import { PressableView, KeyboardAvoidingView, Container, ViewLogo, PressableText } from './style';
import { useState } from 'react';
import { Keyboard } from 'react-native';
import firebase from '../../firebase';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Input from '../../components/Input';
import Pressable from '../../components/Pressable';
import TextBold from '../../components/TextBold';
import TextRegular from '../../components/TextRegular';

const schema = yup.object({
  name: yup.string().required('nome obrigatório'),
  email: yup.string().email('Email errado').required('Email obrigatório'),
  password: yup
    .string()
    .min(6, 'A senha é de no mínimo 06 caracteres')
    .required('Password obrigatória'),
});

export default function Register() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signUp, setSignUp] = useState(false);

  async function handleClick() {
    if (signUp) {
      console.log('Cadastrar!');
    } else {
      console.log('Entrar!');
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
            <Controller
              control={control}
              name='name'
              render={({ field: { onChange, value } }) => (
                <Input
                  value={value}
                  onChangeText={onChange}
                  placeholder='Nome'
                  autoCapitalize='words'
                  keyboardType='default'
                  error={errors.name}
                />
              )}
            />
          )}
          <Controller
            control={control}
            name='email'
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                placeholder='Email'
                autoCorrect={false}
                autoCapitalize='none'
                keyboardType='email-address'
                error={errors.email}
              />
            )}
          />
          <Controller
            control={control}
            name='password'
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                placeholder='Senha'
                autoCorrect={false}
                autoCapitalize='none'
                secureTextEntry={true}
                error={errors.password}
              />
            )}
          />
          <Pressable
            text={signUp ? 'Cadastrar' : 'Acessar'}
            onPress={handleSubmit(() => handleClick())}
          />
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
