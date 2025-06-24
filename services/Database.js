import SQLite from 'react-native-sqlite-storage';

let db;

export const initDB = () => {
  db = SQLite.openDatabase(
    { name: 'attendance.db', location: 'default' },
    () => { console.log('Database opened'); },
    error => { console.error('Error opening database', error); }
  );

  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS attendance (id INTEGER PRIMARY KEY NOT NULL, name TEXT, date TEXT);'
    );
  });
};

export const syncToFirebase = () => {
  console.log('Syncing data to Firebase...');
};