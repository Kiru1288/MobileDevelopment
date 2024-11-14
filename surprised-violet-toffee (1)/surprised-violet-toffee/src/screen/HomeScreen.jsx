import React from 'react';
import { Text, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout.jsx';

const HomeScreen = ({ navigation }) => {
  return (
    <MainLayout>
      <Text>Home Screen - To Do List</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </MainLayout>
  );
};

export default HomeScreen;
