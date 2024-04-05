import { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";


//import para la navegacion 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useRoute } from '@react-navigation/native';
import Home from "../screen/Home";
import Profile from "../screen/Profile";
import About from "../screen/About";
import Admi from "../screen/Admi";
import Search from "../screen/Search";
//imports las pantallas internas




//crear la pila
const Tab = createBottomTabNavigator();
const InsideContainer = () => {
  const route = useRoute();
  const [staff, setStaff] = useState(null);

  useEffect(() => {
    if (route.params?.staff) {
      setStaff(route.params.staff);
    }
  }, [route.params]);
  
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          showLabel: false,
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#fff",
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 0,
                }}
              >
                <Image
                  source={require("../../appMovilRepo/assets/iconos/casa.png")}
                  resizeMode="contain"
                  style={{
                    width: 31,
                    height: 31,
                  }}
                />
                <Text
                  style={{
                    Color: focused ? "#e32f45" : "#748c94",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  Home
                </Text>
              </View>
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 0,
                }}
              >
                <Image
                  source={require("../../appMovilRepo/assets/iconos/lupa.png")}
                  resizeMode="contain"
                  style={{
                    width: 31,
                    height: 31,
                  }}
                />
                <Text
                  style={{
                    Color: focused ? "#e32f45" : "#748c94",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  Buscar
                </Text>
              </View>
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 0,
                }}
              >
                <Image
                  source={require("../../appMovilRepo/assets/iconos/usuario.png")}
                  resizeMode="contain"
                  style={{
                    width: 31,
                    height: 31,
                  }}
                />
                <Text
                  style={{
                    Color: focused ? "#e32f45" : "#748c94",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  Perfil
                </Text>
              </View>
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 0,
                }}
              >
                <Image
                  source={require("../../appMovilRepo/assets/iconos/information.png")}
                  resizeMode="contain"
                  style={{
                    width: 31,
                    height: 31,
                  }}
                />
                <Text
                  style={{
                    Color: focused ? "#e32f45" : "#748c94",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  Info
                </Text>
              </View>
            ),
            headerShown: false,
          }}
        />

        {staff === true && (
          <Tab.Screen
            name="Admin"
            component={Admi}
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    top: 0,
                  }}
                >
                  <Image
                    source={require("../../appMovilRepo/assets/iconos/admin.png")}
                    resizeMode="contain"
                    style={{
                      width: 31,
                      height: 31,
                    }}
                  />
                  <Text
                    style={{
                      Color: focused ? "#e32f45" : "#748c94",
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    Admin
                  </Text>
                </View>
              ),
              headerShown: false,
            }}
          />
        )}
      </Tab.Navigator>
    </>
  );
}
export default InsideContainer

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowffset: {
      with: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});