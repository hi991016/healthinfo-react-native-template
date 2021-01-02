import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View, Image, TextInput } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons'

const EditProfileScreen = ({navigation}) => {
    const [value, onChangeText] = React.useState('Cáo');
    return (
        <>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
            <SafeAreaView style={styles.container}>
                <View style={styles.custom}>
                    <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}            
                    >
                        <View style={styles.headerContainer}>
                            <View>
                                <TouchableOpacity style={styles.iconClose} onPress={() => {navigation.goBack()}}>
                                    <Ionicons name="arrow-back-outline" color='#000' size={32} /> 
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={styles.title}>Edit Profile</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.iconClose} onPress={() => {navigation.goBack()}}>
                                    <Ionicons name="md-checkmark-sharp" color='#1f79ff' size={35} /> 
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{marginTop: 10}}>
                            <View style={styles.profileImage}>
                                <Image source={require("../assets/avatar.jpg")} style={styles.avatar} />
                                <TouchableOpacity>
                                    <Text style={{marginTop: 15, color: '#1f79ff', fontSize: 20}}>Change Photo</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{marginHorizontal: 20}}>
                                <TextInput
                                style={styles.input}
                                onChangeText={text => onChangeText(text)}
                                value={value}
                                />
                                <TextInput
                                style={styles.input}
                                onChangeText={text => onChangeText(text)}
                                value={'Fennec'}
                                />
                            </View>
                            <View style={styles.rowInput}>
                                <TextInput
                                style={styles.input}
                                onChangeText={text => onChangeText(text)}
                                value={'51 kg'}
                                />
                                <TextInput
                                style={styles.input}
                                onChangeText={text => onChangeText(text)}
                                value={'171 Kg'}
                            />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </>
    )
}

export default EditProfileScreen

const styles = StyleSheet.create({
    container: {
        position:'absolute',
        left:0,
        right:0,
        top:0,
        height:'100%',
        backgroundColor:'#000',
    },
    custom: {
        backgroundColor: '#fff',
        height:'100%',
        paddingBottom: 5,
        borderBottomLeftRadius: 44,
        borderBottomRightRadius: 44,
    },
    headerContainer: {
        paddingTop: 50,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 30
    },
    title: {
        fontSize: 23,
        fontWeight: '700',
    },
    buttonLogin: {
        backgroundColor: "#44CAAC",
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        flexDirection: "row",
        marginHorizontal: 20,
        marginTop: 40,
    },
    textLogin: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 15,
        textTransform: 'uppercase'
    },
    avatar: {
        borderRadius: 100,
        width: 100,
        height: 100,
    },
    profileImage: {
        alignItems: 'center',
        marginBottom: 30
    },
    input: {
        flex: 1, 
        height: 60, 
        borderColor: '#000',
        borderWidth: 2, 
        marginHorizontal: 10,
        borderRadius: 5,
        fontSize: 20,
        paddingHorizontal: 20,
        marginBottom: 12,
    },
    rowInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    }
})
