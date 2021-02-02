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
                                    source={{uri: 'https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.0-9/142628492_1446887289012564_9141674745846238007_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=uJ8v9AmHgd8AX9kts_T&_nc_ht=scontent.fsgn5-1.fna&oh=71d30b74fe3b5a91855e849154e9a6cc&oe=603F0FE2'}} 
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
                                    source={{uri: 'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/32149157_1010260882460261_5593137430552117248_o.jpg?_nc_cat=102&ccb=2&_nc_sid=174925&_nc_ohc=iBQdooEpK7sAX-PiVAV&_nc_ht=scontent.fsgn5-4.fna&oh=138e9bd79a0b0926b1c66aa4b8c67cf1&oe=603E64A2'}} 
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
