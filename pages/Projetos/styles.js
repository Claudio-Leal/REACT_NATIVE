import styled from 'styled-components/native';

export const Container = styled.View`
background-color:#E4DCE8;
flex:1;
padding:0 20px;
padding-top: 50px;
padding-bottom: 15px;
`;

export const ProjectContainer = styled.View`
flex-direction:row;
justify-content:space-between;
background-color: ${props => props.finalizado ? "#fbf0fc" : "#ADA1B3"};
padding:15px 20px;
margin-top:20px;
border-radius:20px;
flex:1;
`;

export const Projects = styled.ScrollView`
`;

export const Project = styled.View`
  flex:1;
`;

export const ProjectText = styled.Text`
font-size:20px;
text-align: center;
`;

export const ProjectActions = styled.View`
  flex-direction:row;
`;

export const FormEnviar = styled.View`
  flex-direction:row;
`;

export const Input = styled.TextInput`
border:1px solid #333;
  height:50px;
  flex:1;
  border-radius:20px;
  padding:0 20px;
`;

export const Button = styled.TouchableOpacity`
width:100px;
  background-color:rgb(65, 15, 112);
  height:50px;
  border-radius:20px;
  justify-content:center;
  align-items:center;
  margin-left:10px;
`;

export const TextButton = styled.Text`
font-size:20px;
color: white;
`;
export const Title = styled.Text`
  font-size: 40px;
  color: rgb(65, 15, 112);
  text-align: center;  
`;

export const TitleContainer = styled.View`
  margin-bottom: 50px;
   `;
