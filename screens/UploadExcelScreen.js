import React from 'react';
import { View, Button, Alert } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

export default function UploadExcelScreen() {
  const pickDocument = async () => {
    try {
      const res = await DocumentPicker.pickSingle({ type: [DocumentPicker.types.allFiles] });
      Alert.alert('File Selected', res.name);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Cancelled');
      } else {
        throw err;
      }
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Pick Attendance Excel File" onPress={pickDocument} />
    </View>
  );
}