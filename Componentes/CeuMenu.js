import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import { CeuModules } from '../Data/CeuModules';

const CeuMenu = props =>{
    return (
        <View>
            <Text>Test</Text>
        </View>
    )
}

const style = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
});

export default CeuMenu;