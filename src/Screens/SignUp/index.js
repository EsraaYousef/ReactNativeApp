import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {styles} from './styles';

export default function Login() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [focus, setFocus] = useState(false);
  const customInputStyle = focus ? styles.controlInputFocused : styles.controlInput;

  const handleSubmit = () => {
    Alert.alert('Successfully Login');
  };
  return (
    <View style={styles.mainContainer}>
    
      <Text style={styles.controlLabel}>Email</Text>
        <TextInput
        style={styles.controlInput}
        placeholder="Enter Your Name"
        placeholderTextColor="#4A4A4A"
        onChangeText={setName}
        // keyboardType="text"
        onFocus={() => setFocus(true)}
      />

      <Text style={styles.controlLabel}>Name</Text>
        <TextInput
          style={styles.controlInput}
          placeholder="Enter Your Email"
          placeholderTextColor='#4A4A4A'
          onChangeText={setEmail}
          // keyboardType="email-address"
        />
      <Text style={styles.controlLabel}>Password</Text>
        <TextInput
        style={styles.controlInput}
        placeholder="***"
        placeholderTextColor='#4A4A4A'
        onChangeText={setPassword}
        // keyboardType="numeric"
        secureTextEntry={true}
      />
      
      <TouchableOpacity onPress={handleSubmit}>
        <LinearGradient
          start={{ x: 0.0, y: 0.0 }}
          end={{ x: 0.0, y: 1.0 }}
          locations={[0.0, 0.74]}
          colors={['#CA269E', '#B316D4' ]}
          style={styles.buttonMain}
          useAngle={true}
          angle={315}
          angleCenter={{ x: 0.5, y: 0.5 }}
        >
          <Text style={styles.buttonText}>Login</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
