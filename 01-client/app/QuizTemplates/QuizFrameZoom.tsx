import { Text, View, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import React from 'react';

export default function QuizFrame({ item }: any) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View key={item.id} style={[styles.card]}>
                    <Image
                        source={item.image}
                        style={styles.image}
                    />
                    <Text style={[styles.nunitoBold, {fontSize: 100}]}>{item.label}</Text>
                </View>
            </View>
        </View>    
    );
}

const styles = StyleSheet.create({
    container: {  
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: "center",
    },
    card:{
        width: 304,
        height: 400,
        backgroundColor: "white",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    nunitoBold: {
        fontFamily: "Nunito-Bold",
        color: "#555"
    },
    image: {
        width: 232,
        height: 232,
    }
});

