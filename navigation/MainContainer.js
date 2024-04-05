import React from "react";
import { View, Text } from "react-native";

//imports necesarios para la navegacion
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddAutor from "../screen/AddAutor";
import LoginScreen from "../screen/LoginScreen";
import InsideContainer from "./InsideContainer";
import RegisterScreen from "../screen/RegisterScreen";
import RegisterVerify from "../screen/RegisterVerify";
import BookDetail from "../screen/BookDetail";
import RecuperarContrasena from "../screen/RecuperarContrasena";
import CambioDeContrasena from "../screen/CambioDeContrasena";
import VerificarCodigo from "../screen/VerificarCodigo";
import AddFile from "../screen/AddFile";

//import de las pantallas que tenemos

const Stack = createNativeStackNavigator();

const MainContainer = () => {
    //crea una pila de todas las pantallas a las que se puede navegar
  return (
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
            name="AddAutor"
            component={AddAutor}
            options={{ headerShown: false }}
          />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
            name="Inside"
            component={InsideContainer}
            options={{ headerShown: false }}
          />
        <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegisterVerify"
            component={RegisterVerify}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Detail"
            component={BookDetail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Recuperarcontrasena"
            component={RecuperarContrasena}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cambiodecontrasena"
            component={CambioDeContrasena}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Verificarcodigo"
            component={VerificarCodigo}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddFile"
            component={AddFile}
            options={{ headerShown: false }}
          />
        
      </Stack.Navigator>
  );
};

export default MainContainer;