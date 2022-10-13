import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Pressable, FlatList, SafeAreaView, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OfferComp from "../components/OfferComp";
import { BottomSheet } from "react-native-btr";

const win = Dimensions.get("window");
const DATA = [
    { id: "01", name: "Toyota corolla Hybrid", subName: "LE 4dr Sedan Blueprint", year: "2021" },
    { id: "02", name: "V60 Cross Country", subName: "T5 4dr Wagon AWD Fusion Red Mettalic", year: "2021" },
    { id: "03", name: "V60 Cross Country", subName: "T5 4dr Wagon AWD Fusion Red Mettalic", year: "2021" },
    { id: "04", name: "Toyota corolla Hybrid", subName: "LE 4dr Sedan Blueprint", year: "2021" },
    { id: "05", name: "V60 Cross Country", subName: "T5 4dr Wagon AWD Fusion Red Mettalic", year: "2021" },
    { id: "06", name: "V60 Cross Country", subName: "T5 4dr Wagon AWD Fusion Red Mettalic", year: "2021" },
];
function OffersScreen({ navigation }) {
    const [visible, setVisible] = useState(false);
    const renderItem = ({ item }) => (
        <Pressable onLongPress={() => setVisible(true)}>
            <OfferComp item={item} navigation={navigation} />
        </Pressable>
    );
    function handlerLongClick() {
        setVisible(true);
    }

    const toggleBottomNavigationView = () => {
        setVisible(!visible);
    };
    return (
        <View style={styles.main}>
            <View style={styles.headingWrap}>
                <Text style={styles.heading}>Offers</Text>
            </View>
            <View style={styles.wrap}>
                <FlatList numColumns={1} data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id} />
            </View>

            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <BottomSheet
                        visible={visible}
                        onBackButtonPress={toggleBottomNavigationView}
                        onBackdropPress={toggleBottomNavigationView}
                    >
                        {/*Bottom Sheet inner View*/}
                        <View style={styles.bottomNavigationView}>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: "column",
                                    justifyContent: "space-evenly",
                                }}
                            >
                                <Pressable onPress={toggleBottomNavigationView} style={styles.sheetBtnEnd}>
                                    <Text style={styles.sheetBtnTextEnd}>End Campaign</Text>
                                </Pressable>

                                <Pressable onPress={toggleBottomNavigationView} style={styles.sheetBtn}>
                                    <Text style={styles.sheetBtnText}>Cancel</Text>
                                </Pressable>
                            </View>
                        </View>
                    </BottomSheet>
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        flex: 1,
        paddingBottom: win.height / 10,
    },
    heading: {
        fontSize: win.height / 30,
        color: "#0F3749",
    },
    wrap: {
        marginHorizontal: win.width / 20,
    },
    headingWrap: {
        height: win.height / 15,
        justifyContent: "center",
        paddingHorizontal: win.width / 25,
    },

    container: {
        flex: 1,
        margin: 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E0F7FA",
    },
    bottomNavigationView: {
        backgroundColor: "#fff",
        width: "100%",
        height: win.height / 4,
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    sheetInput: {
        borderWidth: 1,
        borderColor: "lightgray",
        width: win.width / 1.3,
        borderRadius: 10,
        paddingLeft: win.width / 20,
        height: win.height / 15,
    },
    sheetBtn: {
        backgroundColor: "#1F9DD9",
        height: win.height / 15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        width: win.width / 1.3,
    },
    sheetBtnEnd: {
        borderWidth: 1,
        borderColor: "#1F9DD9",
        height: win.height / 15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        width: win.width / 1.3,
    },
    sheetBtnText: {
        color: "white",
        fontSize: win.height / 40,
    },
    sheetBtnTextEnd: {
        color: "#1F9DD9",
        fontSize: win.height / 40,
    },
});

export default OffersScreen;
