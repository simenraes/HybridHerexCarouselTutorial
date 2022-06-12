import React from 'react'
import {StyleSheet} from 'react-native'
import CarouselCards from './CarouselCards'
import {View} from "react-native-web";

export default function App() {
    return (
        <View style={styles.container}>
            <h1> React native carousel tutorial</h1>
            <CarouselCards/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50
    },
});