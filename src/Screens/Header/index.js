import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';


const Header = (props) => {
    const {
        someProp
    } = props;

    return (
        <View style={styles.mainHeader}>
            <Text style={styles.titleText}><Icon name="left" size={24} color="#fff" />  Sign UP</Text>
        </View>
    );
};



export default Header;