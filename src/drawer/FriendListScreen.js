import React from 'react'
import { RefreshControl, SafeAreaView, StatusBar, StyleSheet, Text, View, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { Searchbar } from 'react-native-paper';

const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
}

const FriendListScreen = ({navigation}) => {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
  
      wait(1500).then(() => setRefreshing(false));
    }, []);

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    return (
        <>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
            <SafeAreaView style={styles.container}>
                <View style={styles.headerContainer}>
                    <View>
                        <Text style={styles.title}>Friends List</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.iconClose} onPress={() => {navigation.goBack()}}>
                            <AntDesign name="closesquare" size={50} /> 
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.searchContainer}>
                    <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={{
                        backgroundColor: '#eeeeee',
                        borderRadius: 12
                    }}
                    />
                </View>
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
                                    source={{uri: 'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/100508760_1233479083686720_3321005447846035456_o.jpg?_nc_cat=103&ccb=2&_nc_sid=8bfeb9&_nc_ohc=8JD6edSzllgAX99F_gR&_nc_ht=scontent.fsgn2-2.fna&oh=f1e2f74fea8324970572292e43280ce6&oe=6003AAC2'}} 
                                    style={{ width: 54, height: 54, borderRadius: 120 }} 
                                    />
                                </View>
                                <View>
                                    <Text style={{ color: '#000', fontSize: 16, fontWeight: '700' }}>Stephen Phong</Text>
                                    <Text style={{ color: '#AEAEAE', fontSize: 14 }}>51 kg / 171 cm</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <TouchableOpacity activeOpacity={0.5} style={styles.customChallenge}>
                                    <Text style={{color: '#fff', fontSize: 15}}>Challenge</Text>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.5} style={{marginLeft: 10}}>
                                    <Entypo name="dots-three-vertical" color='#000' size={18} /> 
                                </TouchableOpacity>
                            </View>
                        </View>
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
                                <TouchableOpacity activeOpacity={0.5} style={styles.customChallenge}>
                                    <Text style={{color: '#fff', fontSize: 15}}>Challenge</Text>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.5} style={{marginLeft: 10}}>
                                    <Entypo name="dots-three-vertical" color='#000' size={18} /> 
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.listContainer}>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <View style={{marginRight: 20}}>
                                    <Image 
                                    source={{uri: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-9/32149157_1010260882460261_5593137430552117248_o.jpg?_nc_cat=102&ccb=2&_nc_sid=174925&_nc_ohc=f6quFLKqmu8AX_WC3QS&_nc_ht=scontent.fsgn2-5.fna&oh=520c23995967304c6d8408267d33007d&oe=60031122'}} 
                                    style={{ width: 54, height: 54, borderRadius: 120 }} 
                                    />
                                </View>
                                <View>
                                    <Text style={{ color: '#000', fontSize: 16, fontWeight: '700' }}>The Thien</Text>
                                    <Text style={{ color: '#AEAEAE', fontSize: 14 }}>64 kg / 170 cm</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <TouchableOpacity activeOpacity={0.5} style={styles.customChallenge}>
                                    <Text style={{color: '#fff', fontSize: 15}}>Challenge</Text>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.5} style={{marginLeft: 10}}>
                                    <Entypo name="dots-three-vertical" color='#000' size={18} /> 
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default FriendListScreen

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
    customChallenge: {
        backgroundColor: '#44CAAC',
        padding: 6,
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 5,
    },
})
