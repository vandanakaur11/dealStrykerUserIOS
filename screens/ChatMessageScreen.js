import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Pressable, FlatList, Image, ScrollView, TextInput, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import avatarImg from "../images/avatarImg.png";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import avatarImg2 from "../images/avatarImg2.png";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { BottomSheet } from "react-native-btr";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";

const win = Dimensions.get("window");

const DATA = [
    { side: "get", name: "User Name", role: "Role", msg: "Lorem ipsum dolor sit amet, consetetur", time: "8:45pm", id: "001" },
    { side: "sent", name: "User Name", role: "Role", msg: "Lorem ipsum dolor sit amet, consetetur", time: "8:45pm", id: "002" },
    // { side: "get", name: "User Name", role: "Role", msg: "Lorem ipsum dolor sit amet, consetetur", time: "8:45pm", id: "003" },
    { side: "sent", name: "User Name", role: "Role", msg: "Lorem ipsum dolor sit amet, consetetur", time: "8:45pm", id: "004" },
    // { side: "get", name: "User Name", role: "Role", msg: "Lorem ipsum dolor sit amet, consetetur", time: "8:45pm", id: "005" },
    { side: "sent", name: "User Name", role: "Role", msg: "Lorem ipsum dolor sit amet, consetetur", time: "8:45pm", id: "006" },
    // { side: "get", name: "User Name", role: "Role", msg: "Lorem ipsum dolor sit amet, consetetur", time: "8:45pm", id: "007" },
    // { side: "sent", name: "User Name", role: "Role", msg: "Lorem ipsum dolor sit amet, consetetur", time: "8:45pm", id: "008" },
];
function ChatMessageScreen({ navigation }) {
    const [mess, setMess] = useState("Messages");
    const [openModal, setOpenModal] = useState(false);
    const [visible, setVisible] = useState(false);
    const [toDelete, setToDelete] = useState("");
    const [checkingModal, setCheckingModal] = useState(false);

    const toggleBottomNavigationView = () => {
        setVisible(!visible);
    };
    function handlerLongClick(val) {
        setToDelete(val);
    }
    function clickingModal() {
        setOpenModal(!openModal);
    }
    const renderItem = ({ item }) => (
        <Pressable>
            {item.side === "get" ? (
                <View style={styles.msgChat}>
                    <View style={item.id === toDelete ? styles.handleOpac : ""}>
                        <Pressable onLongPress={() => handlerLongClick(item.id)} style={{ flexDirection: "row" }}>
                            <Image source={avatarImg2} style={styles.imgAva} />
                            <View style={styles.msgChatInner}>
                                <View style={styles.msgChatTop}>
                                    <Text style={styles.msgText}>{item.name}</Text>
                                    <Text style={styles.msgText}>{item.role}</Text>
                                </View>
                                <View style={styles.msgChatMid}>
                                    <Text style={styles.msgText}>{item.msg}</Text>
                                </View>
                                <View style={styles.msgChatBottom}>
                                    <Text></Text>
                                    <Text style={styles.msgText}>{item.time}</Text>
                                </View>
                            </View>
                        </Pressable>
                    </View>
                    {toDelete === item.id && (
                        <View style={{ justifyContent: "space-around", paddingHorizontal: win.width / 40 }}>
                            <AntDesign name="delete" size={win.height / 30} color="#0F3749" />
                            <Pressable onPress={() => setToDelete("")}>
                                <MaterialIcons name="cancel" size={win.height / 30} color="#0F3749" />
                            </Pressable>
                        </View>
                    )}
                </View>
            ) : (
                <View style={styles.msgChatUser}>
                    {toDelete === item.id && (
                        <View style={{ justifyContent: "space-around", paddingHorizontal: win.width / 40 }}>
                            <AntDesign name="delete" size={win.height / 30} color="#0F3749" />
                            <Pressable onPress={() => setToDelete("")}>
                                <MaterialIcons name="cancel" size={win.height / 30} color="#0F3749" />
                            </Pressable>
                        </View>
                    )}
                    <View style={item.id === toDelete ? styles.handleOpac : ""}>
                        <Pressable style={styles.msgChatInnerUser} onLongPress={() => handlerLongClick(item.id)}>
                            <View style={styles.msgChatMid}>
                                <Text style={styles.msgTextUser}>{item.msg}</Text>
                            </View>
                            <View style={styles.msgChatBottom}>
                                <Text></Text>
                                <Text style={styles.msgTextUser}>{item.time}</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            )}
        </Pressable>
    );
    return (
        <View style={styles.main}>
            <View style={styles.nameWrap}>
                <Text style={styles.heading}>Toyota corolla Hybrid</Text>
                <Text style={styles.subheading}>Dealer Name</Text>
            </View>
            <View style={styles.messagesCont}>
                <FlatList numColumns={1} data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id} />
            </View>
            <View>
                <Pressable style={!openModal ? styles.modalStyle : styles.modalStyle2}>
                    {checkingModal ? (
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={styles.innerModal}>
                                <Entypo name="upload" size={win.height / 25} color="white" />
                                <Text style={styles.innerModalText}>Upload Files</Text>
                            </View>
                            <View style={styles.innerModal}>
                                <Ionicons name="pricetag" size={win.height / 25} color="white" />
                                <Text style={styles.innerModalText}>Door price</Text>
                            </View>
                        </View>
                    ) : (
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Pressable style={styles.innerModal}>
                                <Entypo name="upload" size={win.height / 25} color="white" />
                                <Text style={styles.innerModalText}>Upload Files</Text>
                            </Pressable>
                            <Pressable style={styles.innerModal}>
                                <Ionicons name="pricetag" size={win.height / 25} color="white" />
                                <Text style={styles.innerModalText}>Door price</Text>
                            </Pressable>
                        </View>
                    )}
                </Pressable>
                <View style={styles.sendMessageWrap}>
                    <View style={styles.inputWrap}>
                        <TextInput style={styles.inputStyle} value={mess}></TextInput>
                        <Pressable onPress={() => clickingModal()}>
                            {/* <Pressable onPress={()=>setOpenModal(true)}> */}
                            <EvilIcons name="paperclip" size={win.width / 13} color="#0F3749" />
                        </Pressable>
                    </View>
                    {/* {openModal && <View style={styles.modalStyle} >
                   <View style={styles.innerModal} >
                <Entypo name="upload" size={win.height/25} color="white" />
                <Text style={styles.innerModalText}>Upload Files</Text>
                </View>
                <View style={styles.innerModal}>
                <Ionicons name="pricetag" size={win.height/25} color="white" />
                <Text style={styles.innerModalText}>Door price</Text>
                </View>
                </View>} */}

                    <View style={styles.sentIconWrap}>
                        <Feather name="send" size={win.height / 25} color="white" />
                    </View>
                    {/* here start */}
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
                                            flexDirection: "row",
                                            justifyContent: "space-evenly",
                                            width: win.width,
                                            alignItems: "center",
                                        }}
                                    >
                                        <Pressable style={{ alignItems: "center" }} onPress={toggleBottomNavigationView}>
                                            <Entypo name="upload" size={win.height / 25} color="white" />
                                            <Text style={{ color: "white", fontSize: win.height / 60 }}>Upload Files</Text>
                                        </Pressable>
                                        <Pressable style={{ alignItems: "center" }}>
                                            <Ionicons name="pricetag" size={win.height / 25} color="white" />
                                            <Text style={{ color: "white", fontSize: win.height / 60 }}>Door Price</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </BottomSheet>
                        </View>
                    </SafeAreaView>

                    {/* here end */}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        height: win.height,
        backgroundColor: "white",
    },
    nameWrap: {
        height: win.height / 7.5,
        borderBottomWidth: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "lightgray",
    },
    heading: {
        fontSize: win.height / 40,
        color: "#0F3749",
        fontWeight: "bold",
    },
    subheading: {
        fontSize: win.height / 60,
        color: "#0F3749",
    },
    sendMessageWrap: {
        height: win.height / 10,
        width: win.width,
        // backgroundColor: "green",
        position: "absolute",
        bottom: win.height / 45,

        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: win.width / 25,
    },
    inputStyle: {
        width: win.width / 1.6,
        height: win.height / 20,
        // backgroundColor: "crimson",
        fontSize: win.height / 50,
        color: "gray",
    },
    inputWrap: {
        borderWidth: 1,
        borderColor: "#0F3749",
        width: win.width / 1.35,
        height: win.height / 19,
        borderRadius: win.width / 2,
        paddingLeft: 10,
        flexDirection: "row",
        // justifyContent: "space-around",
        alignItems: "center",
    },
    sentIconWrap: {
        backgroundColor: "#23A3F9",
        width: win.height / 13,
        height: win.height / 13,
        borderRadius: win.width / 2,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: win.width / 30,
    },
    messagesCont: {
        height: win.height / 1.5,
        // backgroundColor: "crimson",
    },
    msgChat: {
        // height: win.height / 10,
        // backgroundColor: "pink",
        flexDirection: "row",
        marginVertical: win.height / 110,
    },
    msgChatUser: {
        // height: win.height / 10,
        // backgroundColor: "pink",
        flexDirection: "row",
        marginVertical: win.height / 110,
        justifyContent: "flex-end",
        marginHorizontal: win.width / 30,
    },
    imgAva: {
        height: win.height / 15,
        width: win.height / 15,
        marginHorizontal: win.width / 40,
    },
    msgChatInner: {
        backgroundColor: "#0F3749",
        width: win.width / 1.4,
        padding: win.width / 50,
        borderRadius: 5,
    },
    msgChatInnerUser: {
        backgroundColor: "#CDCDCD",
        width: win.width / 1.4,
        padding: win.width / 50,
        borderRadius: 5,
    },
    msgChatTop: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    msgText: {
        color: "white",
        fontSize: win.height / 55,
    },
    msgTextUser: {
        fontSize: win.height / 50,
        color: "#0F3749",
    },
    msgChatMid: {
        paddingVertical: win.height / 120,
        paddingHorizontal: win.width / 20,
    },
    msgChatBottom: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    modalStyle: {
        // position:"absolute",
        height: win.height / 10,
        width: win.width / 1.5,
        backgroundColor: "#0F3749",
        bottom: win.height / 8.5,
        marginLeft: win.width / 13,
        borderRadius: win.width / 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        borderWidth: 1,
        borderColor: "#CDCDCD",
        opacity: 0,
        marginTop: win.height / 35,
    },
    modalStyle2: {
        // position:"absolute",
        height: win.height / 10,
        width: win.width / 1.5,
        backgroundColor: "#0F3749",
        bottom: win.height / 8.5,
        marginLeft: win.width / 13,
        borderRadius: win.width / 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        borderWidth: 1,
        borderColor: "#CDCDCD",
        opacity: 1,
        marginTop: win.height / 35,
    },
    innerModalText: {
        color: "white",
        fontSize: win.height / 70,
    },
    innerModal: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: win.width / 15,
    },
    container: {
        flex: 1,
        margin: 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    bottomNavigationView: {
        backgroundColor: "#0F3749",
        width: "100%",
        height: win.height / 5.5,
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        // borderWidth:1,
        // borderColor:'white'
    },
    handleOpac: {
        opacity: 0.2,
    },
});

export default ChatMessageScreen;
