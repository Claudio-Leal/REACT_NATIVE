import styled from 'styled-components/native';

export const Container = styled.View`
  background-color:#E4DCE8;
  flex:1;
  justify-content:center;
  align-items:center;
  padding:0 20px;
`;

export const Button = styled.TouchableOpacity`
  width:200px;
  height: 40px;
  background-color: rgb(65, 15, 112);
  border-radius:5px;
  justify-content:center;
  align-items:center;
  margin-top:15px;
`;

export const ButtonText = styled.Text`
  color:#fff;
  font-size:18px;
  font-weight:bold;
`;