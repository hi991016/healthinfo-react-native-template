import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const RunScreen = () => {
    return (
        <View style={styles.container}>
            <Text>run</Text>
        </View>
    )
}

export default RunScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
