import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';

const Chat = ({ navigation }) => {
  const [message, setMessage] = useState("");

  const MessageBody = () => {
    return (
      <View style={styles.message}>
        <View style={styles.messageHead}>
          <Text>PV</Text>
          <Text>Prabhudev</Text>
        </View>
        <View style={styles.messageBody}>
          <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
        </View>
        <View style={styles.messageFoot}>
          <Text>April 22, 1992 07.00pm</Text>
        </View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Login')}>
          <Text>Join</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <MessageBody />
        <MessageBody />
        <MessageBody />
        <MessageBody />
        <MessageBody />
        <MessageBody />
        <MessageBody />
        <MessageBody />
        <MessageBody />
      </ScrollView>

      <View style={styles.footer}>
        <TextInput
          style={styles.input}
          onChangeText={setMessage}
          value={message}
          placeholder="Message"
        />
        <TouchableOpacity style={styles.btn}>
          <Text>
            Send
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text>
            Send Location
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  header: {
    backgroundColor: 'green'
  },
  message: {
    backgroundColor: '#FFFFFF',
    margin: 10,
    padding: 5,
    borderRadius: 10,
  },
  messageHead: {
    flexDirection: 'row'
  },
  messageFoot: {
    alignItems: 'flex-end'
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'blue',
    flexDirection: 'row',
    alignItems: 'center'
  },
  btn: {
    backgroundColor: '#FFFFFF',
    padding: 5,
    margin: 10
  }
});

export default Chat;