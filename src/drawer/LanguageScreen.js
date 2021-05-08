import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Searchbar } from 'react-native-paper';

// the hook
import { useTranslation } from 'react-i18next';

const LanguageScreen = ({navigation}) => {
    const { t, i18n } = useTranslation();
    const [searchQuery, setSearchQuery] = React.useState('');
    const [keyword, setKeyword] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
            <SafeAreaView style={styles.container}>
                    <View style={styles.headerContainer}>
                        <View>
                            <Text style={styles.title}>{t('language_title')}</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.iconClose} onPress={() => {navigation.goBack()}}>
                                <AntDesign name="closesquare" size={50} /> 
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.searchContainer}>
                        <Searchbar
                        placeholder={t('searchScreen_search')}
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
                            <TouchableOpacity 
                                style={styles.iconRef}
                                onPress={() => {
                                    i18n.changeLanguage(i18n.language === 'en' ? 'vn' : 'en').then(() => {
                                        navigation.navigate('HomeDrawer')
                                    });
                                }}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                    <View style={{marginRight: 40}}>
                                        <Image 
                                            source={{uri: 'https://kenh14cdn.com/thumb_w/660/2017/5-1503128133747.png'}} 
                                            style={{ width: 40, height: 40, borderRadius: 50 }} 
                                        />
                                    </View>
                                    <View>
                                        <Text style={{ color: '#000', fontSize: 18, fontWeight: '700' }}>{t('language_english')}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.listContainer}>
                            <TouchableOpacity 
                                    style={styles.iconRef}
                                    onPress={() => {
                                        i18n.changeLanguage(i18n.language === 'vn' ? 'en' : 'vn').then(() => {
                                            navigation.navigate('HomeDrawer')
                                        });
                                    }}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                    <View style={{marginRight: 40}}>
                                        <Image 
                                        source={{uri: 'https://product.hstatic.net/200000122283/product/c-e1-bb-9d-vi-e1-bb-87t-nam_2c0683597d2d419fac401f51ccbae779_grande.jpg'}} 
                                        style={{ width: 40, height: 40, borderRadius: 50 }} 
                                        />
                                    </View>
                                    <View>
                                        <Text style={{ color: '#000', fontSize: 18, fontWeight: '700' }}>{t('language_vietnam')}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default LanguageScreen

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
})
