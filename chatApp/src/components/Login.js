import { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from 'react-native';

const Login = ({ navigation }) => {

  const [username, setUsername] = useState("");
  const [roomId, setRoomId] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.loginSection}>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Enter Username"
        />
        <TextInput
          style={styles.input}
          onChangeText={setRoomId}
          value={roomId}
          placeholder="Enter Room ID"
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={styles.joinBtn}
          onPress={() => navigation.navigate('Chat')}>
          <Text>Join</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginSection: {
    backgroundColor: '#CCCCCC',
    width: '75%',
    padding: 15
  },
  input: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    marginTop: 10
  },
  joinBtn: {
    backgroundColor: 'green',
    width: '25%',
    padding: 5,
    marginTop: 10,
    borderRadius: 10,
  }
});

export default Login;