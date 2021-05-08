import React, { Component } from 'react';
import { Dimensions, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons'
// the hook
import { withTranslation  } from 'react-i18next';

class RunScreen extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          timer: null,
          minutes_Counter: '00',
          seconds_Counter: '00',
          startDisable: false,
        }
      }
     
      componentWillUnmount() {
        clearInterval(this.state.timer);
      }
     
      onButtonStart = () => {
     
        let timer = setInterval(() => {
     
          var num = (Number(this.state.seconds_Counter) + 1).toString(),
            count = this.state.minutes_Counter;
     
          if (Number(this.state.seconds_Counter) == 59) {
            count = (Number(this.state.minutes_Counter) + 1).toString();
            num = '00';
          }
     
          this.setState({
            minutes_Counter: count.length == 1 ? '0' + count : count,
            seconds_Counter: num.length == 1 ? '0' + num : num
          });
        }, 1000);
        this.setState({ timer });
     
        this.setState({startDisable : true})
      }
     
     
      onButtonPause = () => {
        clearInterval(this.state.timer);
        this.setState({startDisable : false})
      }
     
     
      onButtonStop = () => {
        clearInterval(this.state.timer);
        this.setState({
          timer: null,
          minutes_Counter: '00',
          seconds_Counter: '00',
          startDisable : false,
        });
        this.props.navigation.navigate('EndActivity')
    }
    
    render() {
        const { t } = this.props;
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
                                        <TouchableOpacity style={styles.iconOval} activeOpacity={0.5} onPress={() => this.props.navigation.goBack()}>
                                            <Ionicons name='md-chevron-back' color='#000' size={30} />
                                        </TouchableOpacity>
                                        <TouchableOpacity 
                                        activeOpacity={0.5} 
                                        onPress={this.onButtonStart}
                                        style={[styles.iconGo, { backgroundColor:  this.state.startDisable ? '#e48c12' : '#fff'}]} 
                                        disabled={this.state.startDisable}>
                                            <Text style={styles.titleGo}>{t('startScreen_go')}</Text>
                                        </TouchableOpacity>  
                                        <TouchableOpacity 
                                        activeOpacity={0.5} 
                                        onPress={this.onButtonStop}
                                        style={[styles.iconOval2, { backgroundColor:  this.state.startDisable ? '#000' : '#e48c12'}]} 
                                        >
                                            <Ionicons name='stop' size={30}  color={this.state.startDisable? '#fff' : '#000'}/>
                                        </TouchableOpacity>    
                                    </View>
                                    <View style={styles.line}></View>
                                    <View style={styles.distance}>
                                        <Text style={styles.counterText}>{this.state.minutes_Counter} : {this.state.seconds_Counter}</Text>
                                        <Text style={{color: '#000', fontWeight: '700', fontSize: 12}}>{t('startScreen_time')}</Text>
                                    </View>
                                    <View style={styles.infoRunning}>
                                        <View style={{flexDirection: 'column', alignItems: 'center'}}>
                                            <Text style={{color: '#000', fontSize: 15}}>{t('startScreen_distance')}</Text>
                                            <Text style={styles.textInfo}>0,0 <Text style={{fontSize: 10, fontWeight: '700'}}>KM</Text></Text>
                                        </View>
                                        <View style={{flexDirection: 'column', alignItems: 'center'}}>
                                            <Text style={{color: '#000', fontSize: 15}}>{t('startScreen_pace')}</Text>
                                            <Text style={styles.textInfo}>--</Text>
                                        </View>
                                        <View style={{flexDirection: 'column', alignItems: 'center'}}>
                                            <Text style={{color: '#000', fontSize: 15}}>{t('startScreen_calories')}</Text>
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
}

export default withTranslation()(RunScreen);

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
        paddingHorizontal: 20,
        marginTop: 20,
    },
    iconOval: {
        backgroundColor: '#e48c12',
        padding: 12,
        borderRadius: 120,
    },
    iconOval2: {
        backgroundColor: '#000',
        padding: 12,
        borderRadius: 120,
    },
    iconGo: {
        // backgroundColor: '#fff',
        // width: 75,
        // height: 75,
        // borderRadius: 60,
        // top: -20,
        // // borderWidth: 3,
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.19,
        height: Dimensions.get('window').width * 0.19,
        backgroundColor:'#fff',
        justifyContent: 'center',
        alignItems: 'center',
        top: -20,
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
    },
    counterText: {
        color: '#000', 
        fontWeight: '700', 
        fontSize: 30
    },
    titleGo: {
        fontSize: 20, 
        color: '#000', 
        fontWeight: '700',
    }
})


