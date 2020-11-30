import React from 'react'
import { Image, StatusBar, StyleSheet, View } from 'react-native'

const SplashScreen = ({navigation}) => {
    setTimeout(() => {
        navigation.replace('LaddingScreen')
    }, 2000);
    return (
        <>
        <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
        <View style={styles.container}>
            <Image 
            style={styles.logo}
            resizeMode="stretch"
            source={require('../assets/unsplash.png')} 
            />
        </View>    
        </>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 250,
        height: 250,
    }
})
