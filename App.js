import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import UploadExcelScreen from './screens/UploadExcelScreen';
import AttendanceHistoryScreen from './screens/AttendanceHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import { initDB, syncToFirebase } from './services/Database';
import NetInfo from '@react-native-community/netinfo';

const Stack = createStackNavigator();

export default function App() {
  React.useEffect(() => {
    initDB();

    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected) {
        syncToFirebase();
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="UploadExcel" component={UploadExcelScreen} />
        <Stack.Screen name="AttendanceHistory" component={AttendanceHistoryScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}