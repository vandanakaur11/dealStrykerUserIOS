import React, { useState,useEffect} from "react";
import { View, Text, StyleSheet, Image, Dimensions, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import avatarImg4 from "../images/avatarImg4.png";
import carLogo9 from "../images/carLogo9.png";
import { Ionicons } from "@expo/vector-icons";
import ToggleSwitch from "toggle-switch-react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import * as Updates from "expo-updates";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_URL } from "@env";

const win = Dimensions.get("window");
function SettingScreen({ navigation }) {
    const [toggleChangeOffer, setToggleChangeOffer] = useState(false);
    const [toggleChangeChat, setToggleChangeChat] = useState(true);
    const [emailNotify, setEmailNotify] = useState("");
    const [typeNotify, setTypeNotify] = useState("");
    function logOut() {
        AsyncStorage.removeItem("auth");
        Updates.reloadAsync();
    }
    async function notifyByChat() {
        const bodyNotify={
            email:emailNotify.toString(),
            type: "chat",
            Token: await AsyncStorage.getItem("token")

        };
        try {
            let res = await axios.post(`${"https://chassis-staging.herokuapp.com/api/users/setNotificationsType"}`,bodyNotify);
            console.log(res)
        } catch (err) {
            console.log(err);
        }
    }
    async function notifyByOffer() {
        const bodyNotify={
            email:emailNotify.toString(),
            type: "offer",
            Token: await AsyncStorage.getItem("token")

        };
        try {
            let res = await axios.post(`${API_URL}/users/setNotificationsType`,bodyNotify);
            console.log(res)
        } catch (err) {
            console.log(err);
        }
    }
    
    // async function notifyByBoth() {
    //     const bodyNotify={
    //         email:emailNotify.toString(),
    //         type: typeNotify.toString(),
    //         Token: await AsyncStorage.getItem("token")

    //     };
    //     try {
    //         let res = await axios.post(`${"https://chassis-staging.herokuapp.com/api/users/setNotificationsType"}`,bodyNotify);
    //         console.log(res)
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
    // async function notifyByAll() {
    //     const bodyNotify={
    //         email:emailNotify.toString(),
    //         type: typeNotify.toString(),
    //         Token: await AsyncStorage.getItem("token")

    //     };
    //     try {
    //         let res = await axios.post(`${"https://chassis-staging.herokuapp.com/api/users/setNotificationsType"}`,bodyNotify);
    //         console.log(res)
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
    useEffect(() => {
        if(toggleChangeChat){
        notifyByChat();
        }
        if(toggleChangeOffer){
        notifyByOffer();
    }},
     []);
    return (
        <View className={styles.main}>
            <View style={styles.userInfo}>
                <View style={styles.userImgWrap}>
                    <Image source={avatarImg4} style={styles.userImg} />
                </View>
                <Text style={styles.userName}>Mike Tyson</Text>
            </View>
            <View style={styles.notifyWrap}>
                <View>
                    <Ionicons name="md-notifications-outline" size={win.height / 25} color="#0F3749" />
                </View>
                <Text style={styles.notifyText}>Email Notification</Text>
            </View>
            <View style={styles.optionWrap}>
                <View style={styles.optionWrapInnerTop}>
                    <Text style={styles.toggleText}>Offer Notifications</Text>
                    <ToggleSwitch
                        isOn={toggleChangeOffer}
                        onColor="#1F9DD9"
                        offColor="lightgray"
                        // label=""
                        // labelStyle={{ color: "black", fontWeight: "900" }}
                        size="medium"
                        onToggle={(isOn) => setToggleChangeOffer(!toggleChangeOffer)}
                    />
                </View>
                <View style={styles.optionWrapInner}>
                    <Text style={styles.toggleText}>Chat Notifications</Text>
                    <ToggleSwitch
                        isOn={toggleChangeChat}
                        onColor="#1F9DD9"
                        offColor="lightgray"
                        // label=""
                        // labelStyle={{ color: "black", fontWeight: "900" }}
                        size="medium"
                        onToggle={(isOn) => setToggleChangeChat(!toggleChangeChat)}
                    />
                </View>
                {!toggleChangeChat && !toggleChangeOffer && (
                    <Pressable style={styles.optionWrapInnerBottom} onPress={() => navigation.navigate("NotificationScreen")}>
                        <Text style={styles.toggleText}>App Notifications</Text>
                        <Text></Text>
                    </Pressable>
                )}
            </View>
            <View style={styles.notifyWrap}>
                <View>
                    <MaterialCommunityIcons name="account-box" size={win.height / 25} color="#0F3749" />
                </View>
                <Text style={styles.notifyText}>Account</Text>
            </View>
            <View style={styles.optionWrap}>
                <Pressable style={styles.optionWrapInner} onPress={() => navigation.navigate("EditProfile")}>
                    <View style={styles.optionWrapOpt}>
                        <FontAwesome5 name="edit" size={win.height / 35} color="#0F3749" />
                        <Text style={styles.toggleText}>Edit Profile</Text>
                    </View>
                    <View>
                        <MaterialIcons name="navigate-next" size={win.height / 30} color="#0F3749" />
                    </View>
                </Pressable>
                <Pressable style={styles.optionWrapInnerMid} onPress={() => navigation.navigate("ChangePassword")}>
                    <View style={styles.optionWrapOpt}>
                        <Feather name="unlock" size={win.height / 35} color="#0F3749" />
                        <Text style={styles.toggleText}>Change Password</Text>
                    </View>
                    <View>
                        <MaterialIcons name="navigate-next" size={win.height / 30} color="#0F3749" />
                    </View>
                </Pressable>
                {/* <Pressable style={styles.optionWrapInnerMid2} onPress={() => navigation.navigate("ManageUserScreen")}>
                    <View style={styles.optionWrapOpt}>
                    <FontAwesome5 name="user-cog" size={win.height / 40} color="#0F3749" />
                        <Text style={styles.toggleText}>Manage Users</Text>
                    </View>
                    <View>
                        <MaterialIcons name="navigate-next" size={win.height / 30} color="#0F3749" />
                    </View>
                </Pressable> */}
                <View style={styles.optionWrapInner}>
                    <View style={styles.optionWrapOpt}>
                        <Feather name="log-out" size={win.height / 35} color="#0F3749" />
                        <Pressable onPress={() => logOut()}>
                            <Text style={styles.toggleText}>Logout</Text>
                        </Pressable>
                    </View>
                    <View onPress={() => {}}>
                        <MaterialIcons name="navigate-next" size={win.height / 30} color="#0F3749" />
                    </View>
                </View>
            </View>
            <View style={styles.notifyWrap}>
                <View>
                    <MaterialIcons name="miscellaneous-services" size={win.height / 25} color="#0F3749" />
                </View>
                <Text style={styles.notifyText}>Misc</Text>
            </View>
            <View style={styles.optionWrap}>
                <Pressable style={styles.optionWrapInnerTop} onPress={() => navigation.navigate("LanguageScreen")}>
                    <View style={styles.optionWrapOpt}>
                        <MaterialIcons name="language" size={win.height / 35} color="#0F3749" />
                        <Text style={styles.toggleText}>Language</Text>
                    </View>
                    <View>
                        <MaterialIcons name="navigate-next" size={win.height / 30} color="#0F3749" />
                    </View>
                </Pressable>

                <Pressable style={styles.optionWrapInner} onPress={() => navigation.navigate("TermsNcondition")}>
                    <View style={styles.optionWrapOpt}>
                        <MaterialIcons name="library-books" size={win.height / 35} color="#0F3749" />

                        <Text style={styles.toggleText}>Terms & Conditions</Text>
                    </View>
                    <View>
                        <MaterialIcons name="navigate-next" size={win.height / 30} color="#0F3749" />
                    </View>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        width: "100%",
    },
    userInfo: {
        height: win.height / 7,
        // backgroundColor: "crimson",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginTop: win.height / 80,
    },
    userName: {
        fontSize: win.height / 40,
        color: "#0F3749",
    },
    userImg: {
        width: win.height / 12,
        height: win.height / 12,
        // borderWidth:1
    },
    userImgWrap: {
        borderWidth: 1,
        borderColor: "#0F3749",
        borderRadius: win.width / 2,
    },
    notifyWrap: {
        flexDirection: "row",
        height: win.height / 15,
        // backgroundColor: "pink",
        alignItems: "center",
        paddingHorizontal: win.height / 40,
        marginTop: win.height / 70,
    },
    notifyText: {
        fontSize: win.height / 40,
        color: "#0F3749",
        marginLeft: win.width / 50,
    },
    optionWrap: {
        backgroundColor: "white",
        // height: win.height / 10,
        marginHorizontal: win.width / 20,
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
        // paddingVertical: win.height / 200,
    },
    optionWrapInner: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: win.height / 20,
        paddingHorizontal: win.width / 30,
    },
    optionWrapInnerMid: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: win.height / 20,
        paddingHorizontal: win.width / 30,

        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#CDCDCD",
    },
    optionWrapInnerMid2: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: win.height / 20,
        paddingHorizontal: win.width / 30,
        borderBottomWidth: 1,
        borderColor: "#CDCDCD",
    },
    optionWrapInnerTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: win.height / 20,
        paddingHorizontal: win.width / 30,

        borderBottomWidth: 1,
        borderColor: "#CDCDCD",
    },
    optionWrapInnerBottom: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: win.height / 20,
        paddingHorizontal: win.width / 30,
        borderTopWidth: 1,
        borderColor: "#CDCDCD",
    },
    toggleText: {
        fontSize: win.height / 50,
        color: "#0F3749",
        paddingLeft: win.width / 50,
    },
    optionWrapOpt: {
        flexDirection: "row",
        alignItems: "center",
    },
});
export default SettingScreen;
