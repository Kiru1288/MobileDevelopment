import React from 'react';
import { Text } from 'react-native';
import MainLayout from '../layouts/MainLayout.jsx';

function AboutScreen() {
  return (
    <MainLayout>
      <Text>App Name: My App </Text>
      <Text>Your Name: Kiru Hankebo</Text>
      <Text>Date: {new Date().toLocaleDateString()}</Text>
    </MainLayout>
  );
}

export default AboutScreen;
