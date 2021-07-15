import React, { useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { styles } from './styles';




const Home = ({ navigation }) => {

  const [images, setImages] = useState([
    // require('../../Assets/Images/01.jpg'),
    // require('../../Assets/Images/02.jpg'),
    // require('../../Assets/Images/03.jpg'),
    {
      id: 1,
      src: require('../../Assets/Images/01.jpg'),
    },
    {
      id: 2,
      src: require('../../Assets/Images/02.jpg'),
    },
    {
      id: 3,
      src: require('../../Assets/Images/03.jpg'),
    },
    {
      id: 4,
      src: require('../../Assets/Images/01.jpg'),
    },
    {
      id: 5,
      src: require('../../Assets/Images/02.jpg'),
    }
  ]);
    console.log(images);
    return (
        <View style={styles.homeBlock}
        title="Go to Details"
        >
          <Text style={styles.mainTitle}>Image Gallery</Text>
          <FlatList
          horizontal={true} 
          showsHorizontalScrollIndicator={false} 
          data={images}
          renderItem={ ({ item, id }) => (
            <Image source={item.src} 
              key={id} 
              style={styles.singleImage}
            />
          )}
        />
        <Text style={styles.mainTitle}
            onPress={() => navigation.navigate('Profile', { name: 'profile' })
          }>Go to profile</Text>
      </View>
  
    );
    const Profile = ({ navigation, route }) => {
        return <Text>This is {route.params.name}'s profile</Text>;
    }
};



export default Home;