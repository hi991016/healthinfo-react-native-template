import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Searchbar } from 'react-native-paper';

const SearchScreen = ({navigation}) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
            <SafeAreaView style={styles.container}>
                <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}            
                >
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
    },
})
