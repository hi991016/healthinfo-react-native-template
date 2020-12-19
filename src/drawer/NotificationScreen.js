import React from 'react'
import { RefreshControl, SafeAreaView, StatusBar, StyleSheet, Text, View, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
}

function FriendRequest({navigation}) {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
  
      wait(1500).then(() => setRefreshing(false));
    }, []);
    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }      
                >
                    <View style={{marginTop: 25}}>
                        <View style={styles.listContainer}>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <View style={{marginRight: 20}}>
                                    <Image 
                                    source={{uri: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29597226_601217733565084_99387188199077288_n.jpg?_nc_cat=105&ccb=2&_nc_sid=174925&_nc_ohc=-QvKDiSRvnUAX-zdluc&_nc_ht=scontent.fsgn2-1.fna&oh=f674b301fdea27cddb1fa3b9361b2ae9&oe=60002934'}} 
                                    style={{ width: 54, height: 54, borderRadius: 120 }} 
                                    />
                                </View>
                                <View>
                                    <Text style={{ color: '#000', fontSize: 16, fontWeight: '700' }}>Phuong Ly</Text>
                                    <Text style={{ color: '#AEAEAE', fontSize: 14 }}>47 kg / 171 cm</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <TouchableOpacity activeOpacity={0.5} style={styles.customConfirm}>
                                    <Text style={{color: '#fff', fontSize: 15}}>Confirm</Text>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.5} style={{marginLeft: 10}}>
                                    <AntDesign name="close" color='#595959' size={18} /> 
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.listContainer}>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <View style={{marginRight: 20}}>
                                    <Image 
                                    source={{uri: 'https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/121716522_1521115961409052_6831076424541364234_o.jpg?_nc_cat=1&ccb=2&_nc_sid=09cbfe&_nc_ohc=WR_bMGUUmhMAX8oUvNI&_nc_oc=AQknYQM_XoiQH_C7Yw-F6jAZM975jdluWGejN2NiF9aFreCxU8g0qKod776ZgksStucJRRBej59w8rE1BNW3RJ8S&_nc_ht=scontent.fsgn2-3.fna&oh=dba371d685e4cc202ee87af59add1a9f&oe=60027785'}} 
                                    style={{ width: 54, height: 54, borderRadius: 120 }} 
                                    />
                                </View>
                                <View>
                                    <Text style={{ color: '#000', fontSize: 16, fontWeight: '700' }}>Den Vau</Text>
                                    <Text style={{ color: '#AEAEAE', fontSize: 14 }}>67 kg / 179 cm</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <TouchableOpacity activeOpacity={0.5} style={styles.customConfirm}>
                                    <Text style={{color: '#fff', fontSize: 15}}>Confirm</Text>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.5} style={{marginLeft: 10}}>
                                    <AntDesign name="close" color='#595959' size={18} /> 
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.listContainer}>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <View style={{marginRight: 20}}>
                                    <Image 
                                    source={{uri: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-9/12832390_1084455328242636_6273351660990200512_n.png?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=NSfqLo6AIGoAX-OliAc&_nc_ht=scontent.fsgn2-4.fna&oh=99233a1df56547d6f4a3924859c1820b&oe=600206D8'}} 
                                    style={{ width: 54, height: 54, borderRadius: 120 }} 
                                    />
                                </View>
                                <View>
                                    <Text style={{ color: '#000', fontSize: 16, fontWeight: '700' }}>Marco Reus</Text>
                                    <Text style={{ color: '#AEAEAE', fontSize: 14 }}>78 kg / 183 cm</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <TouchableOpacity activeOpacity={0.5} style={styles.customConfirm}>
                                    <Text style={{color: '#fff', fontSize: 15}}>Confirm</Text>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.5} style={{marginLeft: 10}}>
                                    <AntDesign name="close" color='#595959' size={18} /> 
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

function ChallengeRequest({navigation}) {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
  
      wait(2000).then(() => setRefreshing(false));
    }, []);
    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }      
                >
                    <View style={{marginTop: 25}}>
                        <View style={styles.listContainer}>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <View style={{marginRight: 20}}>
                                    <Image 
                                    source={{uri: 'https://scontent.fsgn2-3.fna.fbcdn.net/v/t31.0-8/28619103_2034912613428758_7493420670478077899_o.jpg?_nc_cat=106&ccb=2&_nc_sid=174925&_nc_ohc=AH3j7_AvvuoAX_vX7OK&_nc_ht=scontent.fsgn2-3.fna&oh=5a98c2b51795e9dbdcaf46e4078b5851&oe=60010023'}} 
                                    style={{ width: 54, height: 54, borderRadius: 120 }} 
                                    />
                                </View>
                                <View>
                                    <Text style={{ color: '#000', fontSize: 16, fontWeight: '700' }}>Man Pham</Text>
                                    <Text style={{ color: '#AEAEAE', fontSize: 14 }}>62 kg / 169 cm</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <TouchableOpacity activeOpacity={0.5} style={styles.customConfirm}>
                                    <Text style={{color: '#fff', fontSize: 15}}>Accept</Text>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.5} style={{marginLeft: 10}}>
                                    <AntDesign name="close" color='#595959' size={18} /> 
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="FriendRequest"
        swipeEnabled
        animationEnabled
        tabBarOptions={{
          activeTintColor: '#000',
          inactiveTintColor: '#AFAFAF',
          pressColor: "#eee",
          upperCaseLabel: false,
          labelStyle: { fontSize: 15, fontWeight: '700', textTransform: 'none' },
          style: { backgroundColor: '#fff', },
          indicatorStyle: {
            backgroundColor: '#44CAAC'
          },
        }}
      >
        <Tab.Screen
          name="FriendRequest"
          component={FriendRequest}
          options={{ tabBarLabel: 'Friend Request' }}
        />
        <Tab.Screen
          name="ChallengeRequest"
          component={ChallengeRequest}
          options={{ tabBarLabel: 'Challenge Request' }}
        />
      </Tab.Navigator>
    );
}

export default function NotificationScreen({navigation}) {
  return (
      <>
        <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <View>
                    <Text style={styles.title}>Notifications</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.iconClose} onPress={() => {navigation.goBack()}}>
                        <AntDesign name="closesquare" size={50} /> 
                    </TouchableOpacity>
                </View>
            </View>       
            <MyTabs />
        </SafeAreaView>
      </>
  );
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
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
        fontSize: 30,
        fontWeight: '700',
    },
    searchContainer: {
        marginTop: 30, 
        paddingHorizontal: 20,
    },
    listContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 25,
    },
    customConfirm: {
        backgroundColor: '#00ACE2',
        padding: 6,
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 5,
    }
})
