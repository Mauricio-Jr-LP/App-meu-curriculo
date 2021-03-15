import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <WebView source={{ uri: 'https://github.com/Mauricio-Jr-LP?tab=repositories' }} style={{ marginTop: "5%" }} />
    
  );
}