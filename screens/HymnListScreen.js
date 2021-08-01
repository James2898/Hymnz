import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Icon, ButtonGroup, SearchBar, ListItem } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { Header } from '../components/header';

const hymnEng = [
    {
        no: '1',
        title: 'Doxology',
    },
    {
        no: '2',
        title: 'Glory Be to the Father',
    },
    {
        no: '3',
        title: 'Hear Our Prayer Lord',
    },
    {
        no: '4',
        title: 'To God be the Glory',
    },
    {
        no: '5',
        title: 'Holy, Holy, Holy, Lord God Almighty',
    },
    {
        no: '6',
        title: 'Praise to the Lord, the Almighty',
    },
    {
        no: '7',
        title: 'Crown Him with Many Crowns',
    },
    {
        no: '8',
        title: 'Come, Thou Fount of Every Blessing',
    },
    {
        no: '9',
        title: 'Come, Christians, Join to Sing',
    },
    {
        no: '10',
        title: 'O Worship the King',
    }
];

const hymnFil = [
    {
        no: '1',
        title: 'Ang Ama ay Papurihan',
    },
    {
        no: '2',
        title: 'Ang Ama’y Papurihan',
    },
    {
        no: '3',
        title: 'Ang Daing Namin',
    },
    {
        no: '4',
        title: 'Sa Diyos Ang Luwalhati',
    },
    {
        no: '5',
        title: 'Kabanal-banalang Diyos',
    },
    {
        no: '6',
        title: 'Purihin Ang Diyos At Hari',
    },
    {
        no: '7',
        title: 'Kordero’y Putungan',
    },
    {
        no: '8',
        title: 'O! Bukal ng Pagpapala',
    },
    {
        no: '9',
        title: 'Purihin natin nang Lubusan',
    },
    {
        no: '10',
        title: 'Sumamba sa Haring Banal',
    }
];

const HymnListScreen = ({ navigation }) => {
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

export default HymnListScreen;