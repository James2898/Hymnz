import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { Header } from '../components/header';
import { styles } from '../assets/Styles';

const HomeScreen = ({ navigation }) => {
    return (
    <>
        <Header title="Home" />
        <View stlye={styles.contentView}>
            <View style={{alignItems:'center'}}>
                <View style={styles.buttonsContainer} >
                <Button 
                    title={'Hymns'}
                    containerStyle={styles.buttonsNavigation}
                    onPress={() => navigation.navigate('Hymn')}
                />
                <Button 
                    title={'About'}
                    containerStyle={{
                        width: 200,
                        marginHorizontal: 50,
                        marginVertical: 10
                    }}
                    onPress={() => navigation.navigate('About')}
                />
                </View>
            </View>
        </View>
    </>
    );

}

export default HomeScreen;