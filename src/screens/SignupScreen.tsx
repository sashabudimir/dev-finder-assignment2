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
import * as Location from 'expo-location';
import api from '../services/api';
import { getGithubUser } from '../services/github';

export default function SignupScreen({ navigation }: any) {
  const [username, setUsername] = useState('');

  async function handleSignUp() {
    const cleanedUsername = username.trim();

    if (!cleanedUsername) {
      Alert.alert('Error', 'Insert your GitHub username');
      return;
    }

    try {
      const githubUser = await getGithubUser(cleanedUsername);

      const permission = await Location.requestForegroundPermissionsAsync();

      if (permission.status !== 'granted') {
        Alert.alert('Error', 'Location permission is required.');
        return;
      }

      const location = await Location.getCurrentPositionAsync();

      const newUser = {
        id: githubUser.id,
        name: githubUser.name || githubUser.login,
        login: githubUser.login,
        avatar_url: githubUser.avatar_url,
        company: githubUser.company || 'No company listed',
        bio: githubUser.bio || 'No bio available',
        coordinates: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
      };

      await api.post('/users', newUser);

      navigation.replace('Map', { username: githubUser.login });
    } catch (error) {
      Alert.alert('Error', 'Could not register this GitHub user.');
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