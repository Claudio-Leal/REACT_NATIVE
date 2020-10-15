import React, { useState, useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import api from '../../services/api';
import {
  Container,
  Task,
  TaskContainer,
  TaskActions,
  Input,
  Button,
  TextButton,
  FormEnviar,
  Tasks,
  TaskText,
  Title, 
  TitleContainer
} from './styles'

const Tarefas = ({route}) => {  
  const {projetoId} = {...route.params || {}};

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const loadTasks = async () => {
    try {
      const response = await api.get("tarefas");      
      const filteredTasks = response.data.filter((item) => {
        return item.projetoId == projetoId
      })
      setTasks(filteredTasks)
    } catch (err) {
      console.warn("Falha ao recuperar o projeto.")
    }
  }
  const handleAddTasks = async () => {
    if (newTask == "") {
      console.warn("você deve preencher a tarefa")
      return
    }
    const params = {
      descricao: newTask,
      concluido: false,   
      projetoId: projetoId
    }
    try {
      await api.post("tarefas", params);
      setNewTask("");
      loadTasks();
    } catch (err) {
      console.warn("erro ao salvar a tarefa")
    }
  }
  const handleTasks = async (task) => {
    const params = {
      ...task,
      concluido: !task.concluido
    }
    try {
      await api.put(`tarefas/${task.id}`, params);
      loadTasks();
    } catch (err) {
    }
  }
  const handleRemoveTask = async ({ id }) => {
    try {
      await api.delete(`tarefas/${id}`);
      loadTasks();
    } catch (err) {
      console.warn("erro ao deletar tarefa")
    }    
  }  
  useEffect(() => {
    loadTasks();
  }, [])
  useEffect(() => {  
  }, [newTask])
  return (
    <Container>
      <TitleContainer> 
        <Title>Minhas Tarefas</Title>
      </TitleContainer>
      <Tasks showsVerticalScrollIndicator={false}>
        {tasks.map(task => (
          <TaskContainer key={task.id} finalizado={task.concluido}>
          <TaskActions>
          <MaterialCommunityIcons
            name={task.concluido ? "check-circle" : "circle-outline"}
            color={task.concluido ? "rgb(65, 15, 112)" : "#fbf0fc"}
            size={32}
            onPress={() => { handleTasks(task) }}
          />
      </TaskActions>
            <Task >
              <TaskText>{task.descricao}</TaskText>
            </Task>
            <TaskActions>
              <MaterialCommunityIcons name="delete-forever" size={32} color="rgb(65, 15, 112)" 
               onPress={() => { handleRemoveTask(task) }}
             />
            </TaskActions>            
          </TaskContainer>
        )
        )}
      </Tasks>
      <FormEnviar>
        <Input
          placeholder="Nova Tarefa..."
          onChangeText={(letras) => { setNewTask(letras) }}
          value={newTask}
        />
        <Button onPress={handleAddTasks}>
          <TextButton>Criar</TextButton>
        </Button>
      </FormEnviar>
    </Container>
  )
}
export default Tarefas;