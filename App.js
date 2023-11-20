import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Usuarios from "./pages/Usuarios";

import { store } from "./store"
import { Provider } from 'react-redux';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Usuarios" component={Usuarios} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}