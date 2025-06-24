import React from 'react';
import { View, Button } from 'react-native';

export default function DashboardScreen({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Button title="Upload Attendance Excel" onPress={() => navigation.navigate('UploadExcel')} />
      <Button title="Attendance History" onPress={() => navigation.navigate('AttendanceHistory')} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}