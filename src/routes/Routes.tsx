import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home/Home";
import Login from "../pages/login/Login"
import Cadastro from "../pages/cadastro/Cadastro"
import Digitacao from "../pages/digitacao/Digitacao";
import Selecao from "../pages/selecao/Selecao";
import Gravacao from "../pages/gravacao/Gravacao"
import Mapa from "../pages/mapa/Mapa"
import Dificuldade from "../pages/dificuldade/Dificuldade";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Cadastro" component={Cadastro}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Dificuldade" component={Dificuldade}
          options={{  headerShown: false  }}
        />

        <Stack.Screen name="Mapa" component={Mapa}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Digitacao" component={Digitacao}
          options={{ title: 'Tela de Digitação' }}
        />
        <Stack.Screen name="Selecao" component={Selecao}
          options={{ title: 'Selecao' }}
        />
        <Stack.Screen name="Gravacao" component={Gravacao}
          options={{ title: 'Gravacao' }}
        />



      </Stack.Navigator>
    </NavigationContainer>
  );
}
