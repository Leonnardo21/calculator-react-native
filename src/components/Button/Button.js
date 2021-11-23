import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';

export default props => {
    return(
        <TouchableHighlight style={styles.button} onPress={props.onClick}>
            <Text style={styles.buttonText}>{props.label}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button: {     
        alignItems: 'center',  
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
        
    },
    buttonText: {
        fontSize: 40,
    }
});