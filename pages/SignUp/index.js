import React, { useState} from 'react';
import { ActivityIndicator }from 'react-native';
import api from '../../services/api';
import {
    TitleContainer,
    Title,
    Container,
    Input,
    Button,
    TextButton    
  } from './styles'


const SignUp = ({navigation}) => {  
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [carregando, setCarregando] = useState(false);
    const handleAddUser = async () => {
      if (nome === "") {
        console.warn ("Você deve preencher os campos")
        return 
      }
      const params = {
        nome: nome,
        email: email,
        password: password
      }  
      try {
        await api.post("usuarios", params);
        setNome("");
        setEmail("");
        setPassword("");
        setCarregando("");
      } catch (err) {
        console.warn("erro ao salvar Usuario")
      }  
    }           
    return (
      <Container>  
          <TitleContainer> 
          <Title>Cadastro de Usuários</Title>
          </TitleContainer>                                           
                        <Input
                        onChangeText = {palavra => setNome (palavra)}
                        placeholder="Nome"
                        value = {nome}
                        />
                        <Input
                        onChangeText = {palavra => setEmail (palavra)}
                        placeholder="E-mail"
                        value = {email}
                        />
                        <Input
                        onChangeText = {palavra => setPassword (palavra)}
                        placeholder="Senha"
                        value = {password}
                        secureTextEntry={true}             
                        />
                        <Button onPress={handleAddUser}>
                          <TextButton>Cadastrar</TextButton>
                        </Button>                        
                        <Button onPress={ () => {
                          navigation.navigate("Voltar")
                          }}>
                          {carregando ?
                          <ActivityIndicator color="white" />
                          :
                          <TextButton>Voltar</TextButton>
                        }
                        </Button>
      </Container>
    )
}
export default SignUp;
