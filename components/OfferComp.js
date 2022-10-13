import * as React from "react";
import { View, Text, StyleSheet, Dimensions, Pressable, FlatList, Image, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import avatarImg from "../images/avatarImg.png";

const win = Dimensions.get("window");
const DATA = [
    { name: "Dealer Name", price: "$10,000", id: "01" },
    { name: "Dealer Name", price: "$15,000", id: "02" },
];
function OfferComp({ navigation, item }) {
    return (
        <View style={styles.main}>
            <View style={styles.topWrap}>
                <Text style={styles.heading}>{item.name}</Text>
                <Text style={styles.subheading}>{item.subName}</Text>
                <Text style={styles.subheading}>{item.year}</Text>
            </View>
            <View style={styles.bottomWrap}>
                {DATA?.map((item) => (
                    <View style={styles.listWrap} key={item.id}>
                        <View style={styles.listWrapInner}>
                            <Image source={avatarImg} />
                            <View>
                                <Text style={styles.dealerName}>{item.name}</Text>
                                <Text style={styles.dealerPrice}>{item.price}</Text>
                            </View>
                        </View>
                        <View style={styles.listWrapInner}>
                            {/* <Pressable onPress={() => navigation.navigate("MapStack")}>
                                <Text style={styles.viewMap}>View Map</Text>
                            </Pressable> */}
                            <Pressable style={styles.viewChat}>
                                <Text  style={{color:"white"}} onPress={() => navigation.navigate("MessageStack")}>
                                    Chat
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                ))}
                <Pressable onPress={() => navigation.navigate("OfferStack", { item: item })}>
                    <Text style={styles.listDealers}>View All Dealers</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        width: "100%",
        // flex: 1,
        height: win.height / 2.8,
        backgroundColor: "white",

        borderRadius: 12,
        marginVertical: win.height / 60,
        borderWidth: 0,
        borderColor: "#CDCDCD",
        shadowColor: "#CDCDCD",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        borderRadius: 5,
        elevation: 4,
    },
    topWrap: {
        height: win.height / 10,
        // borderWidth: 1,
        // borderColor: "#CDCDCD",

        justifyContent: "space-evenly",
        alignItems: "center",
    },
    heading: {
        fontWeight: "bold",
        fontSize: win.height / 40,
        color: "#0F3749",
    },
    subheading: {
        fontSize: win.height / 65,
        color: "#0F3749",
    },
    listWrap: { flexDirection: "row", height: win.height / 10, justifyContent: "space-between" },
    listWrapInner: {
        flexDirection: "row",
        width: win.width / 2.4,
        // backgroundColor: "pink",
        // borderWidth: 1,
        alignItems: "center",
        justifyContent: "space-around",
    },
    bottomWrap: {
        // backgroundColor: "lightgreen",
        height: win.height / 3.9,

        // flex: 1,
        overflow: "hidden",
        justifyContent: "space-evenly",
    },
    listDealers: {
        textAlign: "center",
        color: "#1F9DD9",
        fontSize: win.height / 60,
    },
    dealerName: {
        fontSize: win.height / 70,
        color: "#0F3749",
    },
    dealerPrice: {
        fontSize: win.height / 50,
        color: "#0F3749",
    },
    viewMap: {
        fontSize: win.height / 70,
        color: "#1F9DD9",
        fontWeight: "bold",
    },
    viewChat: {
        fontSize: win.height / 60,
        backgroundColor: "#1F9DD9",
        color: "white",
        paddingHorizontal: win.width / 10,
        alignItems: "center",
        borderRadius: win.width / 5,
        paddingVertical: win.height / 120,
        
    },
});

export default OfferComp;