import React from 'react'
import { Image, ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import { ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable';

export default class LoginSplash extends React.Component {
  render() {
    return (
        <>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
            <View style={styles.container}>
                <ImageBackground 
                style={styles.imageLadding}
                resizeMode="cover" 
                source={require('../assets/imagebg.jpg')}
                imageStyle={{ backgroundColor:'#000', opacity: 0.8 }} 
                >
                    <View style={styles.header}>
                      <Animatable.Image
                        animation="bounceIn"
                        duration={1500}
                        style={styles.logo}
                        source={require('../assets/healthinfo.png')} 
                      />
                    </View>
                    <Animatable.View 
                    style={styles.footer}
                    animation="fadeInUpBig"
                    >
                        <View style={styles.line}></View>
                        <ScrollView
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}                        
                        >
                        <View style={{alignSelf: 'center', marginTop: 30, marginHorizontal: 20}}>
                            <Text style={styles.title}>Log in or Sign up</Text>
                            <Text style={styles.desc}>Welcome to Health Info. First thing first</Text>
                            <Text style={styles.desc}>log in or sign up so that we can begin.</Text>
                        </View>
                        <TouchableOpacity style={styles.buttonGoogle} activeOpacity={0.9}>
                                <Image style={styles.iconGoolge} source={require('../assets/google.png')}/>
                                <Text style={styles.textGoogle}>Continue with Goolge</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('LoginScreen')}>
                            <View style={styles.buttonLogin}>
                                <Text style={styles.textLogin}>Sign In</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigation.navigate('SignUpScreen')}>
                            <View style={styles.buttonSignUp}>
                                <Text style={styles.textSignUp}>Sign Up</Text>
                            </View>
                        </TouchableOpacity>
                      </ScrollView>  
                    </Animatable.View>
                </ImageBackground>
            </View>
        </>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
    },
    imageLadding: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "flex-start",
        resizeMode: "cover",
    },
    logo: {
        width: 250,
        height: 250,
        alignSelf: 'center',
        top: -40
    },
    header: {
        flex: 1,
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    line: {
        borderWidth: 3,
        borderColor: '#D3D3D3',
        width: 40,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: -10,
    },
    title: {
        fontSize: 23,
        color: '#233249',
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 15,
    },
    desc: {
        fontSize: 17,
        color: '#9EA1A7',
        textAlign: 'center'
    },
    textGoogle: {
        color: '#233249',
        fontSize: 18,
        textAlign: 'center',
        left: 10
    },
    buttonGoogle: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 4,
        marginBottom: 10,
    },
    buttonLogin: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#252427',
        borderRadius: 10,
        height: 60,
        marginHorizontal: 20,
        marginTop: 10,
    },
    textLogin: {
        color: '#233249',
        fontSize: 18,
        textAlign: 'center',
    },
    iconGoolge: {
        width: 16,
        height: 15.73,
    },
    buttonSignUp: {
        backgroundColor: '#252427',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        flexDirection: "row",
        marginHorizontal: 20,
        marginTop: 20,
      },
    textSignUp: {
          color: '#fff',
          fontSize: 18,
    },
})
