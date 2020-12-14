import React from 'react'
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View,} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import MenuItem from './MenuItem'

const HomeScreen = ({navigation}) => {
    return (
        <>
        <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
        <SafeAreaView style={styles.container}>
            <View style={styles.custom}>
                <View style={styles.headerContainer}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                            <Image style={styles.menu} source={require('../assets/menu.png')} resizeMode='contain' /> 
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => { navigation.navigate('Profile') }}>
                            <Image style={styles.profileImage} source={require('../assets/avatar.jpg')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.refresh}>
                    <View>
                        <Text style={styles.title}>Activity</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.iconRef}>
                            <SimpleLineIcons name="refresh" color='#e52a2a' size={28} /> 
                        </TouchableOpacity>
                    </View>
                </View>
                <MenuItem />
            </View>
        </SafeAreaView>
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        position:'absolute',
        left:0,
        right:0,
        top:0,
        height:'100%',
        backgroundColor:'#000',
    },
    headerContainer: {
        paddingTop: 50,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 100,
    },
    menu: {
        width: 32,
        height: 32,
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
    },
    custom: {
        backgroundColor: '#FFF',
        height:'100%',
        paddingBottom: 5,
        borderBottomLeftRadius: 44,
        borderBottomRightRadius: 44,
    },
    refresh: {
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
    },
    iconRef: {
        backgroundColor: '#fff', //e52a2a
        padding: 5,
        borderRadius: 8,
    }
})
