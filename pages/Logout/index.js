import React, { useContext } from 'react';
import { Image } from 'react-native';
import logoImg from '../../assets/logo.png';
import { UsuarioContext } from '../../contexts/user';

import {
  Container,
  Button,
  ButtonText
} from './styles'

const Logout = () => {
    const { signOut } = useContext(UsuarioContext)
  return (
    <Container>
    <Image source={logoImg} />      
    <Button onPress={() => {
        signOut()
      }}>
        <ButtonText>Desconectar-se</ButtonText>
      </Button>
    </Container>
  )
}
export default Logout;