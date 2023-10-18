import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Usuarios from "./pages/Usuarios";

import { UtilsContext } from "./context";
import {useState} from 'react';

export default function App() {
  const Stack = createStackNavigator();
  const [data,setData] = useState([]);

  return (
    <NavigationContainer>

      <UtilsContext.Provider value={{data, setData}}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Usuarios" component={Usuarios} />
        </Stack.Navigator>
      </UtilsContext.Provider>


    </NavigationContainer>
  );
}