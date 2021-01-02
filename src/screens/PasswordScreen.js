import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TextInput } from 'react-native-paper';

const PasswordScreen = ({navigation}) => {
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
                                <Text style={styles.title}>Change Password</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.iconClose} onPress={() => {navigation.goBack()}}>
                                    <Ionicons name="md-checkmark-sharp" color='#1f79ff' size={35} /> 
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{marginTop: 10}}>
                            <View style={styles.inputContainer}>
                                <TextInput 
                                placeholder={'Password'}
                                underlineColor='transparent' 
                                theme={{ colors: '#fff' }}
                                placeholderTextColor = "#A5A3A3"
                                autoCapitalize = "none"  
                                style={styles.textInput} 
                                secureTextEntry={true} />
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput 
                                placeholder={'New Password'}
                                underlineColor='transparent' 
                                theme={{ colors: '#fff' }}
                                placeholderTextColor = "#A5A3A3"
                                autoCapitalize = "none"  
                                style={styles.textInput} 
                                secureTextEntry={true} />
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput 
                                placeholder={'Confirm Password'}
                                underlineColor='transparent' 
                                theme={{ colors: '#fff' }}
                                placeholderTextColor = "#A5A3A3"
                                autoCapitalize = "none"  
                                style={styles.textInput} 
                                secureTextEntry={true} />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </>
    )
}

export default PasswordScreen

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
    inputContainer: {
        borderColor: '#252427',
        borderWidth: 2,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        flexDirection: "row",
        marginHorizontal: 20,
        marginTop: 25,
    },
    textInput: {
        flex: 1,
        backgroundColor: 'transparent',
        fontSize: 15,
        height: 60,
        borderColor: 'transparent',
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
    }
})
