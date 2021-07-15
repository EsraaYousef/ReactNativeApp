import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    
  },
  controlLabel: {
    color: 'white',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius:10
  },
  controlInput: {
    height: 50,
    margin: 10,
    borderWidth: 1,
    borderColor: '#fafafa',
    marginBottom: 20,
    borderRadius:10,
    color: 'white',
    paddingLeft: 10,
    backgroundColor: '#101010'
  },
  controlInputFocused:{
    height: 50,
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    borderRadius:10,
    color: 'white',
    borderColor: '#c823af'
  },
  buttonMain: {
    height: 50,
    // backgroundColor: '#C823AF',
    padding: 10,
    borderRadius:10,
    margin: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight:'bold',
    textAlign: 'center',
  }
});

export {styles};
