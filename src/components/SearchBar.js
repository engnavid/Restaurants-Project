import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit}) => {


    return(
        <View style={styles.backgroundStyle}>
            <AntDesign name="search1" style={styles.iconStyle} />
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder='Search'
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)}
                onEndEditing={() => onTermSubmit()} // Also we can do it like onEndEditing={onTermSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#f0eeee',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 10,
    },
    inputStyle:{
        flex: 1,
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        color: 'black',
        marginHorizontal: 10,
    }
});

export default SearchBar;