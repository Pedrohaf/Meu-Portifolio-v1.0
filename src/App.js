// import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  View, 
  SafeAreaView, 
  StatusBar, 
  Image, 
  Text,
  Pressable,
} from 'react-native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';

const colorGitHub = "#010409";
const imageGithub = 'https://avatars.githubusercontent.com/u/38915329?v=4';
const colorFontGitHub = '#C9D1D9'
const colorDarkFontGitHub = '#4F565E'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar  backgroundColor={colorGitHub} barStyle='light-content' />
      <View style={styles.content}>
        <Image style={styles.avatar} source={{uri: imageGithub}}/>
        <Text style={[styles.defaultText, styles.name]}> Pedro Henrique </Text>
        <Text style={[styles.defaultText, styles.nickName]}> Pedrohaf</Text>
        <Text style={[styles.defaultText, styles.description]}> Desenvolvedor Web Junior| 
        21 anos | Ciência da computação (cursando) 
        Técnico Redes de Computadores (2016) </Text>
      </View>

      <Pressable onPress={() => console.log("GitHub")}>
        <View>
          <Text style={[styles.Button, styles.defaultText, styles.textButton]}> 
            Open in GitHub
          </Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                         //expandir para a tela intreira
    backgroundColor: colorGitHub,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  content:{
    alignItems: 'center',
    padding: 20,
  },

  avatar: {
      height: 200,
      width:200,
      borderRadius: 100,
      borderColor: 'white',
      borderWidth: 2,
  },
  defaultText: {
    color: 'white'
  },
  name:{
    fontSize: 24,
    fontWeight: 'bold',
    color: colorFontGitHub
  },
  nickName:{
    fontSize: 18,
    color: colorDarkFontGitHub
  },
  description:{
    fontSize: 16,
    fontWeight: ' bold',
    color: colorFontGitHub
  },
  Button:{
    marginTop: 20,
    backgroundColor: colorDarkFontGitHub,
    borderRadius: 10,
    padding: 20,
  },
  textButton :{
    fontSize: 18,
    fontWeight: ' bold',
    color: colorFontGitHub
  },
});
