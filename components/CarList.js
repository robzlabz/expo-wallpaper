import React from 'react'
import {FlatList, StyleSheet, Text, View, Dimensions} from 'react-native'
import Car from './Car'

const items = [{
    key: '1',
    name: 'Model S',
    tagline: 'Starting at $69,420',
    image: require('../assets/images/ModelS.jpeg'),
}, {
    key: '2',
    name: 'Model 3',
    tagline: 'Order Online for',
    taglineCTA: 'Touchless Delivery',
    image: require('../assets/images/Model3.jpeg'),
}, {
    key: '3',
    name: 'Model X',
    tagline: 'Order Online for',
    taglineCTA: 'Touchless Delivery',
    image: require('../assets/images/ModelX.jpeg'),
}, {
    key: '4',
    name: 'Model Y',
    tagline: 'Order Online for',
    taglineCTA: 'Touchless Delivery',
    image: require('../assets/images/ModelY.jpeg'),
}];

const CarList = () => {
    return (
        <View>
            <FlatList
                data={items}
                renderItem={({item}) => <Car car={item} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}

export default CarList

const styles = StyleSheet.create({})
