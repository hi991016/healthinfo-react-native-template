import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// the hook
import { useTranslation } from 'react-i18next';

const StatisticScreen = () => {
    const { t, i18n } = useTranslation();
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
                            <Text style={styles.title}>{t('diaryScreen_title')}</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.iconRef}>
                                <SimpleLineIcons name="refresh" color='#fff' size={28} /> 
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View style={styles.subContainer}>
                            <View>
                                <Text style={styles.nameActivity}>{t('diaryScreen_running')}</Text>
                            </View>
                            <View style={styles.dot}></View>
                            <Text style={styles.day}>02/02/2020</Text>
                        </View>
                        <View style={styles.healthInfo}>
                            <View>
                                <Image style={styles.icon} source={require('../assets/distance.png')} resizeMode='contain' />
                                <Text style={{marginTop: 15, fontSize: 18}}>8.32</Text>
                                <Text style={{fontSize: 14, color: '#9e9e9e'}}>Kilometers</Text>
                            </View>
                            <View>
                                <Image style={styles.icon} source={require('../assets/steps.png')} resizeMode='contain' />
                                <Text style={{marginTop: 15, fontSize: 18}}>450</Text>
                                <Text style={{fontSize: 14, color: '#9e9e9e'}}>Steps</Text>
                            </View>
                            <View>
                                <Image style={styles.icon} source={require('../assets/calo.png')} resizeMode='contain' />
                                <Text style={{marginTop: 15, fontSize: 18}}>325</Text>
                                <Text style={{fontSize: 14, color: '#9e9e9e'}}>Calories</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={styles.subContainer}>
                            <View>
                                <Text style={styles.nameActivity}>{t('diaryScreen_walking')}</Text>
                            </View>
                            <View style={styles.dot}></View>
                            <Text style={styles.day}>02/01/2020</Text>
                        </View>
                        <View style={styles.healthInfo}>
                            <View>
                                <Image style={styles.icon} source={require('../assets/distance.png')} resizeMode='contain' />
                                <Text style={{marginTop: 15, fontSize: 18}}>1.24</Text>
                                <Text style={{fontSize: 14, color: '#9e9e9e'}}>Meters</Text>
                            </View>
                            <View>
                                <Image style={styles.icon} source={require('../assets/clock.png')} resizeMode='contain' />
                                <Text style={{marginTop: 15, fontSize: 18}}>1.24</Text>
                                <Text style={{fontSize: 14, color: '#9e9e9e'}}>Minutes</Text>
                            </View>
                            <View>
                                <Image style={styles.icon} source={require('../assets/speed.png')} resizeMode='contain' />
                                <Text style={{marginTop: 15, fontSize: 18}}>144</Text>
                                <Text style={{fontSize: 14, color: '#9e9e9e'}}>m/s</Text>
                            </View>
                            <View>
                                <Image style={styles.icon} source={require('../assets/calo.png')} resizeMode='contain' />
                                <Text style={{marginTop: 15, fontSize: 18}}>87</Text>
                                <Text style={{fontSize: 14, color: '#9e9e9e'}}>Calories/s</Text>
                            </View>
                        </View>
                    </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </>
    )
}

export default StatisticScreen

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
        backgroundColor: '#FFF',
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
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
    },
    subContainer: {
        paddingTop: 30,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    nameActivity: {
        fontSize: 22,
        fontWeight: '700',
        color: '#44caac'
    },
    dot: {
        backgroundColor: '#44caac',
        width: 6,
        height: 6,
        borderRadius: 50,
        marginLeft: 18,
        marginRight: 18,
        marginTop: 5,
    },
    day: {
        fontSize: 15,
        color: '#aaa',
        fontWeight: '500',
        marginTop: 2,
    },
    healthInfo: {
        marginTop: 30,
        marginHorizontal: 30,
        padding: 25,
        borderWidth: 2,
        borderColor: '#cfcfcf',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
    },
    icon: {
        width: 30,
        height: 30,
    },
    iconRef: {
        backgroundColor: '#e52a2a',
        padding: 10,
        borderRadius: 14,
    }
})
