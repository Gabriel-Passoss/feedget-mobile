import React, { useCallback, useEffect, useState } from 'react';

import 'react-native-gesture-handler'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

import { theme } from './src/theme'
import Widget from './src/components/Widget'


export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
  Inter_400Regular,
  Inter_500Medium
});

useEffect(() => {
  async function loading() {
    try {
      // Keep the splash screen visible while we fetch resources
      await SplashScreen.preventAutoHideAsync();
      // Pre-load fonts, make any API calls you need to do here
      await fontsLoaded
      // Artificially delay for two seconds to simulate a slow loading
      // experience. Please remove this if you copy and paste the code!
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (e) {
      console.warn(e);
    } finally {
      // Tell the application to render
      setAppIsReady(true);
    }
  }

  loading();
}, []);

const onLayoutRootView = useCallback(async () => {
  if (appIsReady) {
    await SplashScreen.hideAsync();
  }
}, [appIsReady]);

if (!appIsReady) {
  return null;
}
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background
      }}
      onLayout={onLayoutRootView}

    >
      <StatusBar 
      style="light"
      backgroundColor='transparent'
      translucent
      />
      <Widget />
    </View>
  );
}
