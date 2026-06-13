import { useState } from 'react';
import {
  View,
  TextInput,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import BigButton from '../components/BigButton';

export default function SignupScreen({ navigation }: any) {
  const [username, setUsername] = useState('');

  async function handleSignUp() {
    const cleanedUsername = username.trim();

    if (!cleanedUsername) {
      Alert.alert('Error', 'Insert your GitHub username');
      return;
    }

    try {
      const response = await fetch(`https://api.github.com/users/${cleanedUsername}`);

      if (!response.ok) {
        Alert.alert('Invalid username', 'There is no such username on GitHub.');
        return;
      }

      navigation.replace('Map', { username: cleanedUsername });
    } catch {
      Alert.alert('Error', 'Could not check GitHub username. Please try again.');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.mapBackground}>
        <View style={styles.roadOne} />
        <View style={styles.roadTwo} />
        <View style={styles.roadThree} />
        <View style={styles.pin} />
      </View>

      <KeyboardAvoidingView
        style={styles.form}
        behavior={Platform.OS === 'ios' ? 'position' : undefined}
      >
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Insert your GitHub username"
          value={username}
          onChangeText={setUsername}
        />

        <BigButton label="Sign Up" color="#031A62" onPress={handleSignUp} />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapBackground: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#dbeafe',
  },
  roadOne: {
    position: 'absolute',
    top: 160,
    left: -40,
    width: 900,
    height: 12,
    backgroundColor: '#ffffff',
    transform: [{ rotate: '18deg' }],
  },
  roadTwo: {
    position: 'absolute',
    top: 330,
    left: -80,
    width: 900,
    height: 10,
    backgroundColor: '#ffffff',
    transform: [{ rotate: '-20deg' }],
  },
  roadThree: {
    position: 'absolute',
    top: 80,
    left: 350,
    width: 12,
    height: 600,
    backgroundColor: '#ffffff',
    transform: [{ rotate: '8deg' }],
  },
  pin: {
    position: 'absolute',
    top: 270,
    left: 380,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#d9480f',
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  form: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    padding: 24,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#031b6233',
    borderRadius: 4,
    borderWidth: 1,
    height: 56,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginBottom: 16,
    color: '#333',
    fontSize: 16,
  },
});