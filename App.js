import React, { useState } from 'react';
import { NativeAppEventEmitter, StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import Navigator from './routes/homeStack';

export default function App() {
  return (
    <Navigator />
  );
}

