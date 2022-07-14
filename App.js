import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';

import { LogBox } from 'react-native';
LogBox.ignoreAllLogs(true); // Desabilita os warnings na tela

export default function App() {
  const { fontsLoaded } = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Routes />
        <StatusBar backgroundColor={'#000'} />
      </NavigationContainer>
    </ThemeProvider>
  );
}
