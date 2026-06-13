import { Image, StyleSheet, Text, View } from 'react-native';
import { Callout, Marker } from 'react-native-maps';
import User from '../types/user';

interface UserMarkerProps {
  data: User;
  handleCalloutPress: (username: string) => void;
}

export default function UserMarker({ data: user, handleCalloutPress }: UserMarkerProps) {
  return (
    <Marker coordinate={user.coordinates}>
      <Image
        style={styles.avatar}
        source={{ uri: user.avatar_url }}
        resizeMode="cover"
      />

      <Callout onPress={() => handleCalloutPress(user.login)}>
        <View style={styles.callout}>
          <Text style={styles.devName}>{user.name}</Text>
          <Text style={styles.devCompany}>{user.company}</Text>
          <Text style={styles.devBio}>{user.bio}</Text>
        </View>
      </Callout>
    </Marker>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 64,
    height: 64,
    borderWidth: 4,
    borderColor: '#E8EAED',
    borderRadius: 32,
  },
  callout: {
    width: 240,
  },
  devName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  devCompany: {
    color: '#666',
    fontSize: 12,
  },
  devBio: {
    color: '#666',
    marginTop: 5,
  },
});