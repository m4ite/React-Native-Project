import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Usuarios from "./pages/Usuarios";

export default function App()
{
  const Stack = createStackNavigator();

  return(
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Usuarios" component={Usuarios}/>
      </Stack.Navigator>
   </NavigationContainer>
  );
}