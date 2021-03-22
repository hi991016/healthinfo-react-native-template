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
                                    source={{uri: 'https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-9/19554580_474532292900296_3243303330337493207_n.jpg?_nc_cat=109&ccb=2&_nc_sid=174925&_nc_ohc=qYyli2ZTpwUAX9omiKy&_nc_ht=scontent.fsgn5-6.fna&oh=d059ad80b5db93340371767bf19f5757&oe=603DC7FE'}} 
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
                                    <Text style={{color: '#fff', fontSize: 13}}>Accept</Text>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.5} style={styles.customReject}>
                                    <Text style={{color: '#00ACE2', fontSize: 13}}>Reject</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.listContainer}>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <View style={{marginRight: 20}}>
                                    <Image 
                                    source={{uri: 'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/121716522_1521115961409052_6831076424541364234_o.jpg?_nc_cat=1&ccb=2&_nc_sid=09cbfe&_nc_ohc=sT1rpDyViEQAX9f0m6M&_nc_oc=AQm1vV2kXsiBz9wheCbNYlrtuWmCbtrIkwMPJIV-_Vl8RBurt_KtfRdPDry157DYXrw&_nc_ht=scontent.fsgn5-3.fna&oh=9db727a2f3b8aa8ea1c1bd92e9c09574&oe=603DCB05'}} 
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
                                    <Text style={{color: '#fff', fontSize: 13}}>Accept</Text>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.5} style={styles.customReject}>
                                    <Text style={{color: '#00ACE2', fontSize: 13}}>Reject</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.listContainer}>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <View style={{marginRight: 20}}>
                                    <Image 
                                    source={{uri: 'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/131294218_4220110181335986_7140461812444362762_o.jpg?_nc_cat=1&ccb=2&_nc_sid=09cbfe&_nc_ohc=mdtXDXSUuYYAX9TXiF6&_nc_ht=scontent.fsgn5-3.fna&oh=85c9d06596bc0902a55aa78541e895ae&oe=603DA390'}} 
                                    style={{ width: 54, height: 54, borderRadius: 120 }} 
                                    />
                                </View>
                                <View>
                                    <Text style={{ color: '#000', fontSize: 16, fontWeight: '700' }}>Son Tung M-TP</Text>
                                    <Text style={{ color: '#AEAEAE', fontSize: 14 }}>78 kg / 183 cm</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <TouchableOpacity activeOpacity={0.5} style={styles.customConfirm}>
                                    <Text style={{color: '#fff', fontSize: 13}}>Accept</Text>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.5} style={styles.customReject}>
                                    <Text style={{color: '#00ACE2', fontSize: 13}}>Reject</Text>
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
                                    source={{uri: 'https://scontent.fsgn5-6.fna.fbcdn.net/v/t31.0-8/28619103_2034912613428758_7493420670478077899_o.jpg?_nc_cat=106&ccb=2&_nc_sid=174925&_nc_ohc=RrybHr2rMN8AX_DGvVK&_nc_ht=scontent.fsgn5-6.fna&oh=6c4626c2050c28e40507bfdb9e896470&oe=603C53A3'}} 
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
    },
    customReject: {
        borderWidth: 1,
        borderColor: '#00ACE2',
        padding: 6,
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 5,
        marginLeft: 5,
    }
})
