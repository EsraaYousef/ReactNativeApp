import React from 'react';
import AppStore from 'react-native-vector-icons/AntDesign';
import GooglePlay from 'react-native-vector-icons/Entypo';
import { Text, View } from 'react-native';
import { styles } from './styles';



const SocialButtons = (props) => {
   

    return (
        <View>
            <Text style={styles.lightTex}>SignUp with One of the Following Options</Text>
            <View style={styles.buttonsContainer}>
                <Text style={styles.socialButton}>
                    <AppStore name="apple1" size={24} color="#fff" />
                </Text>
                <Text style={styles.socialButton}>
                    <GooglePlay name="google-play" size={24} color="#fff" />
                </Text>
            </View>
        </View>
        
    );
};


export default SocialButtons;