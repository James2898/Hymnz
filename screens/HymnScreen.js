import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Icon, ButtonGroup, SearchBar, ListItem } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { Header } from '../components/header';
import {hymnEng, hymnFil} from '../assets/Hymns/Index';

function HymnScreenStack ({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
            
            />
        </Stack.Navigator>
    )
};

const HymnScreen = ({ navigation }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(0);
    const hymns = [ hymnEng, hymnFil];
    return (
    <>
        <Header title="Hymns" />
            <SearchBar
                platform="android"
                placeholder="Search Hymns"
            />
            <ButtonGroup
                buttons={[
                    "English",
                    "Tagalog"
                ]}
                selectedIndex={selectedLanguage}
                onPress={(value) => {
                    setSelectedLanguage(value);
                }}
            />
            <FlatList
                contentContainerStyle={{
                    flexGrow:1
                }}
                extraData={selectedLanguage}
                ListHeaderComponent={
                <>
                    <View style={{ paddingVertical: 8}} >
                        {hymns[selectedLanguage].map((l, i) => (
                            <TouchableOpacity
                                key={i}
                                onPress={() => console.log('hit')}
                            >
                                <ListItem
                                    containerStyle={{
                                        marginHorizontal: 16,
                                        marginVertical: 8,
                                        borderRadius: 8
                                    }}
                                >
                                    <ListItem.Content>
                                        <ListItem.Title>
                                            {( l.no < 10 ? '0' : '' ) + l.no + " " + l.title}
                                        </ListItem.Title>
                                    </ListItem.Content>
                                </ListItem>
                            </TouchableOpacity>
                            ))
                        }
                    </View>
                </>
                }
            />
    </>
    );

}

export default HymnScreen;