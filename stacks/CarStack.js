import * as React from "react";
import { View, Text, StyleSheet, Image,Dimensions} from "react-native";
import { NavigationContainer, TabRouter } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CarsScreen from "../screens/CarsScreen";
import CarScreen from "../screens/CarScreen";
import CarModelScreen from "../screens/CarModelScreen";
import volvoIcon from "../images/volvoIcon.png";
import { useSelector,useDispatch } from "react-redux";

const Stack = createNativeStackNavigator();
const win = Dimensions.get("window");

function CarStack({ route }) {
    const brandSelect = useSelector(state => state.brand.value)
    console.log("this is selected",brandSelect)
    return (
        <Stack.Navigator
            screenOptions={
                {
                    // headerShown: false,
                }
            }
        >
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: "#0F3749",
                    },
                    headerTintColor: "white",
                    headerTitle: (props) => (
                        <View style={styles.headerWrap}>
                            {/* <Image source={volvoIcon} /> */}
                            <Text style={styles.brandHeading}>{brandSelect}</Text>
                        </View>
                    ),
                }}
                name="CarsScreen"
                component={CarsScreen}
                initialParams={route}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: "#0F3749",
                    },
                    headerTintColor: "white",
                    headerTitle: (props) => (
                        <View style={styles.headerWrap}>
                            {/* <Image source={volvoIcon} /> */}
                            <Text style={styles.brandHeading}>Variants | Colors</Text>
                        </View>
                    ),
                }}
                name="CarModelScreen"
                component={CarModelScreen}
                initialParams={route}
            />
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: "#0F3749",
                    },
                    headerTintColor: "white",
                    headerTitle: (props) => (
                        <View style={styles.headerWrap}>
                            {/* <Image source={volvoIcon} /> */}
                            <Text style={styles.brandHeading}>Selected Car</Text>
                        </View>
                    ),
                }}
                name="CarScreen"
                component={CarScreen}
                initialParams={route}
            />

            {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    headerWrap: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "crimson",
        width: "75%",
    },
    brandHeading: {
        fontWeight: "bold",
        color: "white",
        // fontFamily:"cursive",
        fontSize: win.width/20,
        
    },
});
export default CarStack;
