import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function MapScreen({ route, navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.logout}>Logout</Text>

      <View style={styles.markerOne}>
        <Text style={styles.avatar}>LT</Text>
      </View>

      <View style={styles.markerTwo}>
        <Text style={styles.avatar}>JS</Text>
      </View>

      <TouchableOpacity
        style={styles.tooltip}
        onPress={() =>
          navigation.navigate('Profile', {
            githubUsername: route.params.username,
          })
        }
      >
        <Text style={styles.name}>Linus Torvalds</Text>
        <Text>@{route.params.username}</Text>
        <Text style={styles.link}>Tap to open GitHub profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbeafe',
  },
  logout: {
    position: 'absolute',
    top: 40,
    right: 30,
    backgroundColor: '#101847',
    color: 'white',
    padding: 10,
  },
  markerOne: {
    position: 'absolute',
    top: 180,
    left: 120,
  },
  markerTwo: {
    position: 'absolute',
    top: 330,
    left: 260,
  },
  avatar: {
    backgroundColor: '#101847',
    color: 'white',
    width: 50,
    height: 50,
    borderRadius: 25,
    textAlign: 'center',
    paddingTop: 15,
    fontWeight: 'bold',
  },
  tooltip: {
    position: 'absolute',
    top: 250,
    left: 90,
    right: 90,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 8,
    color: '#1f6feb',
  },
});