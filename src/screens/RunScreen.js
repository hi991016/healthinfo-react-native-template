import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'

const RunScreen = ({navigation}) => {
    return (
        <>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
            <SafeAreaView style={styles.container}>
                <View style={styles.ladding}>
                    <View style={styles.headerContainer}>

                    </View>
                    <Animatable.View 
                        style={styles.footer}
                        animation="fadeInUpBig"
                        >
                            <ScrollView
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}  
                            >
                                <View style={styles.buttonRun}>
                                    <TouchableOpacity style={styles.iconOval} activeOpacity={0.5} onPress={() => navigation.goBack()}>
                                        <Ionicons name='md-chevron-back' color='#000' size={30} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.iconGo} activeOpacity={0.5} onPress={() => navigation.navigate('EndActivity')}>
                                        <Text style={{fontSize: 22, color: '#000', fontWeight: '700'}}>GO</Text>
                                    </TouchableOpacity>  
                                    <TouchableOpacity style={styles.iconOval} activeOpacity={0.5} >
                                        <Entypo name='dots-two-vertical' color='#000' size={30}  />
                                    </TouchableOpacity>    
                                </View>
                                <View style={styles.line}></View>
                                <View style={styles.distance}>
                                    <Text style={{color: '#000', fontWeight: '700', fontSize: 30}}>00:00:00</Text>
                                    <Text style={{color: '#000', fontWeight: '700', fontSize: 12}}>TIME</Text>
                                </View>
                                <View style={styles.infoRunning}>
                                    <View style={{flexDirection: 'column', alignItems: 'center'}}>
                                        <Text style={{color: '#000', fontSize: 15}}>Distance</Text>
                                        <Text style={styles.textInfo}>0,0 <Text style={{fontSize: 10, fontWeight: '700'}}>KM</Text></Text>
                                    </View>
                                    <View style={{flexDirection: 'column', alignItems: 'center'}}>
                                        <Text style={{color: '#000', fontSize: 15}}>Pace</Text>
                                        <Text style={styles.textInfo}>--</Text>
                                    </View>
                                    <View style={{flexDirection: 'column', alignItems: 'center'}}>
                                        <Text style={{color: '#000', fontSize: 15}}>Calories</Text>
                                        <Text style={styles.textInfo}>0 <Text style={{fontSize: 10, fontWeight: '700'}}>KCAL</Text></Text>
                                    </View>
                                </View>
                            </ScrollView>
                    </Animatable.View>
                </View>
            </SafeAreaView>
        </>
    )
}

export default RunScreen

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
    },
    ladding: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#000'
    },
    headerContainer: {
        flex: 1,
        alignItems: 'center',
        
    },
    footer: {
        flex: 0.6,
        backgroundColor: '#ff9d15', //"#44CAAC"
        borderTopLeftRadius: 35,
        borderTopRightRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    buttonRun: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
        marginTop: 20,
    },
    iconOval: {
        backgroundColor: '#e48c12',
        padding: 8,
        borderRadius: 120,
    },
    iconGo: {
        backgroundColor: '#fff',
        padding: 30,
        borderRadius: 100,
        top: -20,
        // borderWidth: 3
    },
    line: {
        backgroundColor: '#000',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 1,
        flexDirection: "row",
        marginHorizontal: 20,
    },
    distance: { 
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    infoRunning: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 20,
    },
    textInfo:{
        color: '#000', 
        fontWeight: '700', 
        fontSize: 22
    }
})


