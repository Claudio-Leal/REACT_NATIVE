import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import Logout from '../pages/Logout' 
import Tarefas from '../pages/Tarefas';
import Dashboard from '../pages/Dashboard';
import Projetos from '../pages/Projetos';
import { AntDesign } from '@expo/vector-icons'; 
import { createStackNavigator } from '@react-navigation/stack';


const projeto = createStackNavigator();

const ProjetoScreen = () => {
  return (
    <projeto.Navigator
      screenOptions={
        {
          headerShown: false
        }
      }
    >
      <projeto.Screen name="Projetos" component={Projetos} />
      <projeto.Screen name="Tarefas" component={Tarefas} />
      
    </projeto.Navigator>
  )
}
const Tab = createBottomTabNavigator();
const AppRoutes = () => { 
  return (
    <Tab.Navigator
      initialRouteName="Projetos"
      tabBarOptions={
        {
          activeTintColor: 'rgb(65, 15, 112)',
          inactiveTintColor: 'grey',
          activeBackgroundColor: '#fbf0fc',
          inactiveBackgroundColor: '#fbf0fc'
        }
      }>
      <Tab.Screen
        name="Projetos"
        component={ProjetoScreen}
        options={
          {
            tabBarIcon: ({ color }) => (
              <AntDesign name="profile" size={26} color={color} />
            )
          }
        } />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={
          {
            tabBarIcon: ({ color }) => (
              <Octicons name="graph" size={26} color={color} />
            )
          }
        } />
      <Tab.Screen
          name="Log Out"
          component= {Logout}
          options={
            {
              tabBarIcon: ({ color }) => (
                <AntDesign name="logout" size={26} color={color} />
              )
            }
          } />
    </Tab.Navigator>
  )
}
export default AppRoutes;