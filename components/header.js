import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header as HeaderRNE } from 'react-native-elements';

const Header = (props) => {
    const navigation = useNavigation();

    return (
        <HeaderRNE
            leftComponent={{
                icon: 'menu',
                color: '#fff',
                onPress: navigation.openDrawer
            }}
            centerComponent={{ text: props.title, style: styles.heading }}
        />
    );
}

const SubHeader = (props) => {
    return (
        <View style={[styles.headerContainer, containerStyle]}>
            <Text style={[styles.heading, textStyle]}>{title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#397af8',
        marginBottom: 20,
        width: '100%',
        paddingVertical: 15,
    },
    heading: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
    },
    subheaderText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
  });

export { Header };