import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';

export default function SignupScreen({ navigation }: any) {
  const [username, setUsername] = useState('');

  const handleSignup = () => {
    if (!username.trim()) {
      Alert.alert('Error', 'Enter a GitHub username');
      return;
    }

    navigation.navigate('Map', { username });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Developer Finder</Text>

      <TextInput
        style={styles.input}
        placeholder="GitHub Username"
        value={username}
        onChangeText={setUsername}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 12,
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'navy',
    padding: 15,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});