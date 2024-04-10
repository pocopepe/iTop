import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import {useState} from 'react'; 
import { Link } from 'expo-router';
import { WebView } from 'react-native-webview';
import EditScreenInfo from '@/components/EditScreenInfo';


export default function Login() {
  const[username, setusername]=useState('');
  const[password, setpassword]=useState('');
  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text=> setusername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={text=> setpassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input:{
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,},
  button:{},
  buttonText:{}
});
