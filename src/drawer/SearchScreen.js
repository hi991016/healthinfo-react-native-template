import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Searchbar } from 'react-native-paper';

const SearchScreen = ({navigation}) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [keyword, setKeyword] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
            <SafeAreaView style={styles.container}>
                    <View style={styles.headerContainer}>
                        <View>
                            <Text style={styles.title}>Search</Text>
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
                    >   
                        <View style={styles.listContainer}>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <View style={{marginRight: 20}}>
                                    <Image 
                                    source={{uri: 'https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.0-9/142628492_1446887289012564_9141674745846238007_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=uJ8v9AmHgd8AX9kts_T&_nc_ht=scontent.fsgn5-1.fna&oh=71d30b74fe3b5a91855e849154e9a6cc&oe=603F0FE2'}} 
                                    style={{ width: 54, height: 54, borderRadius: 120 }} 
                                    />
                                </View>
                                <View>
                                    <Text style={{ color: '#000', fontSize: 15, fontWeight: '700' }}>Stephen Phong</Text>
                                    <Text style={{ color: '#AEAEAE', fontSize: 15 }}>phongdang@gmail.com</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <TouchableOpacity activeOpacity={0.5} style={styles.customAdd}>
                                    <Text style={{color: '#fff', fontSize: 14}}>Add Friend</Text>
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
                                    <Text style={{ color: '#000', fontSize: 15, fontWeight: '700' }}>Man Pham</Text>
                                    <Text style={{ color: '#AEAEAE', fontSize: 15 }}>manpham@gmail.com</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <TouchableOpacity activeOpacity={0.5} style={styles.customAdd}>
                                    <Text style={{color: '#fff', fontSize: 14}}>Add Friend</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default SearchScreen

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
        marginBottom: 30,
    },
    listContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 25,
    },
    customAdd: {
        backgroundColor: '#00ACE2',
        padding: 6,
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 5,
    },
})
