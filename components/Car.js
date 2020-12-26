import React from 'react'
import {ImageBackground, StyleSheet, Text, View, Dimensions} from 'react-native'
import StyledButton from './StyledButton'

const Car = (props) => {
    const {name, tagline, image} = props.car;

    const changeWallpaper = () => {
        console.log('Change Wallpaper');
    }
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={image} style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{tagline}</Text>
            </View>

            <View style={styles.buttonContainer}>
                <StyledButton content="Set Wallpaper" type="primary" onPress={changeWallpaper} />
            </View>
        </View>
    )
}

export default Car

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height
    },
    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        fontWeight: '600'
    },
    subtitle: {
        fontSize: 16,
        color: '#999'
    },
    image: {
        resizeMode: 'cover',
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
    }
})
