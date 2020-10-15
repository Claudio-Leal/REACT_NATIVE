import React, { useEffect, useState, useContext } from 'react';
import { Text } from 'react-native';
import {
  Container,
  Texto,
  Titulo
} from './styles';
import ProgressCircle from 'react-native-progress-circle';
import api from '../../services/api';
import { useIsFocused } from '@react-navigation/native';
import { UsuarioContext } from '../../contexts/user';

const Dashboard = () => {
  const { user } = useContext(UsuarioContext)
  const focoPagina = useIsFocused();
  const [percentual, setPercentual] = useState(0);
  const percentualProjetosRealizadas = async () => {
    const resultado = await api.get("projetos");
    const projetos = resultado.data
    const projetos_realizadas = projetos.filter(projeto => projeto.concluido)
    const calculo_percentual = (projetos_realizadas.length / projetos.length) * 100
    setPercentual(calculo_percentual)
  }

  useEffect(() => {
    if (focoPagina) {
      percentualProjetosRealizadas();
    }
  }, [focoPagina])
  return (
    <Container>
      <Titulo>{user.nome}</Titulo>
      
      <ProgressCircle
        percent={percentual}
        radius={100}
        borderWidth={30}
        color="rgb(65, 15, 112)"
        shadowColor="#ADA1B3"
        bgColor="#fff"      >
        <Text style={{ fontSize: 25 }}>{`${percentual.toFixed(2)}%`}</Text>
      </ProgressCircle>      
        <Texto>Projetos Concluídos</Texto>      
    </Container>
  )
};
export default Dashboard;