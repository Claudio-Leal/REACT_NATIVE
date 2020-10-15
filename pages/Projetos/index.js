import React, { useState, useEffect} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import api from '../../services/api';
import {
  Container,
  Project,
  ProjectContainer,
  ProjectActions,
  Input,
  Button,
  TextButton,
  FormEnviar,
  Projects,
  ProjectText,
  Title, 
  TitleContainer
} from './styles'
const Projetos = ({navigation}) => {    
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState("");  
  const loadProjects = async () => {    
    try {
      const response = await api.get("projetos");      
      setProjects(response.data)
    } catch (err) {
      console.warn("Falha ao recuperar os projetos.")
    }    
  }  
  const handleAddProjects = async () => {   
    if (newProject == "") {
      console.warn("você deve preencher os projetos")
      return
    }
    const params = {
      descricao: newProject,
      concluido: false
    }    
    try {
      await api.post("projetos", params);
      setNewProject("");
      loadProjects();
    } catch (err) {
      console.warn("erro ao salvar a projetos")
    }    
  }  
  const handleProjects = async (project) => {    
    const params = {
      ...project,
      concluido: !project.concluido
    }    
    try {
      await api.put(`projetos/${project.id}`, params);
      loadProjects();
    } catch (err) {      
    }
  }  
  const handleRemoveProject = async ({ id }) => {    
    try {
      await api.delete(`projetos/${id}`);
      loadProjects();
    } catch (err) {
      console.warn("erro ao deletar projetos")
    }    
  }  
  useEffect(() => {  
    navigation.navigate ('Tarefas')  
    loadProjects();
  }, [])  
  useEffect(() => {    
  }, [newProject])  
  return (    
    <Container>  
      <TitleContainer> 
        <Title>Meus Projetos</Title>
      </TitleContainer>         
      <Projects showsVerticalScrollIndicator={false}>        
        {projects.map(project => (
          <ProjectContainer key={project.id} finalizado={project.concluido}>
          <MaterialCommunityIcons
                name={project.concluido ? "check-circle" : "circle-outline"}
                color={project.concluido ? "rgb(65, 15, 112)" : "#fbf0fc"}
                size={32}
                onPress={() => { handleProjects(project) }}
                />
            <Project >
              <ProjectText onPress={()=>{navigation.navigate("Tarefas", {
            projetoId: project.id})}}>{project.descricao}</ProjectText>
                </Project>
                <ProjectActions>
                <MaterialCommunityIcons name="delete-forever" size={32} color="rgb(65, 15, 112)"
                onPress={() => { handleRemoveProject(project) }}
                />
              </ProjectActions>
          </ProjectContainer>
)
)}
      </Projects>
      <FormEnviar>
        <Input
          placeholder="Novo Projeto ..."
          onChangeText={(letras) => { setNewProject(letras) }}
          value={newProject}
          />
        <Button onPress={handleAddProjects}>
          <TextButton>Criar</TextButton>
        </Button>
      </FormEnviar>
    </Container>
)
}
export default Projetos;
