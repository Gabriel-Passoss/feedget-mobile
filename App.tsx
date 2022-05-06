import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

import { theme } from './src/theme'
import { Widget } from './src/components/Widget'

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background
    }}
    >
      <Widget />
      <StatusBar 
      style="light"
      backgroundColor='transparent'
      translucent
      />
    </View>
  );
}
