import React from 'react'
import {Pressable, StyleSheet, Text, View} from 'react-native'

const StyledButton = (props) => {
    const {content, type, onPress} = props;
    const backgroundColor = type == 'primary' ? 'black' : 'white';
    const textColor = type == 'primary' ? 'white' : 'black';

    return (
        <View style={styles.container}>
            <Pressable style={[styles.button, {backgroundColor: backgroundColor}]} onPress={onPress}>
                <Text style={[styles.text, {color: textColor}]}>{content}</Text>
            </Pressable>
        </View>
    )
}

export default StyledButton

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10
    },
    button: {
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 12,
        fontWeight: '500',
        textTransform: 'uppercase',
    }
})
