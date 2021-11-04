/* eslint-disable prettier/prettier */
import React from 'react';
import {Dimensions, StyleSheet, Text, View, } from 'react-native';

export default function Footer({data}) {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>{data.footer}</Text>

        </View>
    );
}
const styles = StyleSheet.create({
    main: {
        backgroundColor: 'rgb(235,235,235)',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * (5 / 100),
        borderTopWidth: 2,
        borderTopColor: 'rgb(30,30,30)',
        position: 'absolute',
        bottom: 0,
        padding: 10,
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'rgb(0,0,145)',
    },
})