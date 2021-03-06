import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const Auth = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Auth.Navigator
      screenOptions={
        {
          headerShown: false
        }
      }
    >
      <Auth.Screen name="Login" component={Login} />
      <Auth.Screen name="Cadastro" component={SignUp} />
      <Auth.Screen name="Voltar" component={Login} />
    </Auth.Navigator>
  )
}

export default AuthRoutes;