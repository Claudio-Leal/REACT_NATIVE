import styled from 'styled-components/native';
 
export const Container = styled.View`
 background-color:#E4DCE8;
 flex:1;
 justify-content:center;
 align-items:center;
 padding:0 20px;
`;
 
export const Input = styled.TextInput`
 border:1px solid #ccc;
 width:240px;
 height: 50px;
 border-radius:5px;
 padding:0 20px;
 margin-top:15px;
`;
 
export const Title = styled.Text`
 font-size: 40px;
 color: rgb(65, 15, 112);
 text-align: center;
 
`;
 
export const TitleContainer = styled.View`
 margin-bottom: 50px;
 `;
 
 export const Button = styled.TouchableOpacity`
 width:200px;
 background-color:rgb(65, 15, 112);
 height:40px;
 border-radius:5px;
 justify-content:center;
 align-items:center;
 margin-left:10px;
 margin-top:15px;
 
`;
 
export const TextButton = styled.Text`
color:#fff;
font-size:18px;
font-weight:bold;
 
`;