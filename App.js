import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Routes from './routes';
import { UsuarioProvider } from './contexts/user';
import { LogBox } from 'react-native';

export default function App() {
  LogBox.ignoreLogs(['perform a React'])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UsuarioProvider>
        <Routes />
      </UsuarioProvider>
    </SafeAreaView>
  );
}