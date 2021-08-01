import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ThemeContext } from 'react-native-elements';
import HomeScreen from '../screens/HomeScreen';
import HymnScreen from '../screens/HymnScreen';
import AboutScreen from '../screens/AboutScreen';
import HymnListScreen from '../screens/HymnListScreen';

const Drawer = createDrawerNavigator();

function RootNavigator() {
    const { theme } = useContext(ThemeContext);
    
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContentOptions={{
                    activeBackgroundColor: '#fff'
                }}
            >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Hymn" component={HymnScreen} />
                <Drawer.Screen name="HymnList" component={HymnListScreen} />
                <Drawer.Screen name="About" component={AboutScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;