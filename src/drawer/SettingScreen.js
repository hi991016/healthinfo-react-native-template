import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Searchbar } from 'react-native-paper'; 
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const SettingScreen = ({navigation}) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
            <SafeAreaView style={styles.container}>
                    <View style={styles.headerContainer}>
                        <View>
                            <Text style={styles.title}>Settings</Text>
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
                        <View style={styles.customButton}>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={styles.fontText}>Email</Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.5} >
                                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{ fontSize: 13 ,color: '#aaa' ,marginRight: 10}}>phamminhmancute1999@gmail.com</Text>
                                    <FontAwesome5 name='angle-right' color='#000' size={22} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.customButton}>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={styles.fontText}>Connected trackers</Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.5} >
                                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                    <FontAwesome5 name='angle-right' color='#000' size={22} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.customButton}>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={styles.fontText}>Privacy settings</Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.5} >
                                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                    <FontAwesome5 name='angle-right' color='#000' size={22} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.customButton}>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={styles.fontText}>Notifications</Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.5} >
                                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                    <FontAwesome5 name='angle-right' color='#000' size={22} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.customButton}>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={styles.fontText}>Language</Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.5} >
                                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{ fontSize: 13 ,color: '#aaa' ,marginRight: 10}}>English</Text>
                                    <FontAwesome5 name='angle-right' color='#000' size={22} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.customButton}>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={styles.fontText}>Units</Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.5} >
                                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{ fontSize: 13 ,color: '#aaa' ,marginRight: 10}}>Metric (kilometers)</Text>
                                    <FontAwesome5 name='angle-right' color='#000' size={22} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.line}></View>
                        <View style={{marginTop: 20, borderColor: '#d9d0d0', borderWidth: 15}}>
                            <Text style={{color: '#787878', fontSize: 18, fontWeight: '700', backgroundColor: '#d9d0d0'}}>MORE INFO</Text>    
                        </View>
                        <View style={styles.customButton}>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={styles.fontText}>Help & Support</Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.5} >
                                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                    <FontAwesome5 name='angle-right' color='#000' size={22} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.customButton}>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={styles.fontText}>Legal</Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.5} >
                                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                    <FontAwesome5 name='angle-right' color='#000' size={22} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.customButton}>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={styles.fontText}>About</Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.5} >
                                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                    <FontAwesome5 name='angle-right' color='#000' size={22} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.line}></View>
                        <View style={{alignItems: 'center', marginTop: 25, marginBottom: 25}}>
                            <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('LoginSplash')}>
                                <Text style={{color: 'red', fontSize: 22}}>Log out</Text>
                            </TouchableOpacity>
                        </View>                   
                    </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default SettingScreen

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
        marginBottom: 10
    },
    customButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 22,
        marginTop: 30,
    },
    fontText: {
        color: '#000',
        fontWeight: '700',
        fontSize: 17,
    },
    line: {
        borderWidth: 0.6,
        borderColor: '#eee',
        marginHorizontal: 20,
        marginTop: 18
    }
})
