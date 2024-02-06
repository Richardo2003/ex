import {
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Programmer from './assets/mobil.jpg';

const App = () => {
  const handlePress = () => {
    alert('HALLO!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Basic Components in RN </Text>
      <ScrollView>
        <TextInput
          placeholder="Masukkan username anda"
          style={styles.inputUsername}
        />
        <TouchableOpacity
          onPress={handlePress}
          style={styles.touchableOpacity}>
          <Text style={styles.touchableText}>submit</Text>
        </TouchableOpacity>
        <View style={styles.colorBoxesContainer}>
          <View style={[styles.colorBox, {backgroundColor: 'red'}]} />
          <View style={[styles.colorBox, {backgroundColor: 'green'}]} />
          <View style={[styles.colorBox, {backgroundColor: 'blue'}]} />
        </View>
        <Image
          source={require('./assets/oreo.jpeg')}
          style={styles.image}
        />
        <Image source={Programmer} style={styles.image} />
        <Image
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          style={styles.image}
        />
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
  inputUsername: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  colorBoxesContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
  },
  colorBox: {
    width: 100,
    height: 100,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginVertical: 10,
  },
  touchableOpacity: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 20,
  },
  touchableText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;