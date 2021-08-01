import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { Header } from '../components/header';
import { styles } from '../assets/Styles';

const HymnScreen = ({ navigation }) => {
    return (
    <>
        <Header title="About" />
        <View stlye={styles.contentView}>
            <View style={{alignItems:'center'}}>
                <View style={styles.buttonsContainer} >
                <Button 
                    title={'Home'}
                    containerStyle={{
                        width: 200,
                        marginHorizontal: 50,
                        marginVertical: 10
                    }}
                    onPress={() => navigation.navigate('Home')}
                />
                </View>
            </View>
        </View>
    </>
    );

}

export default HymnScreen;