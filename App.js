import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import SplashScreen from "./screens/SplashScreen";
// import LoginScreen from "./screens/LoginScreen";
import AuthStack from "./stacks/AuthStack";
import HomeStack from "./stacks/HomeStack";
import { store } from "./store";
import { Provider } from "react-redux";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();
const StackLogin = createNativeStackNavigator();

function App() {
    useEffect(async () => {
        let getToken = await AsyncStorage.getItem("auth");
        console.log(getToken);
    }, []);
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="authstack" component={AuthStack} />
                    <Stack.Screen name="homestack" component={HomeStack} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default App;
