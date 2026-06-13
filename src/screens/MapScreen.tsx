import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { Marker, Region } from 'react-native-maps';

export default function MapScreen({ route, navigation }: any) {
  const username = route.params.username;

  const [region, setRegion] = useState<Region>({
    latitude: 51.0447,
    longitude: -114.0719,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

  useEffect(() => {
    setRegion({
      latitude: 51.0447,
      longitude: -114.0719,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    });
  }, []);

  function handleLogout() {
    navigation.replace('Signup');
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region}
        showsUserLocation={true}
        showsMyLocationButton={false}
        toolbarEnabled={false}
        showsIndoors={false}
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: 51.0447,
            longitude: -114.0719,
          }}
          title={username}
          description={`@${username}`}
          onCalloutPress={() =>
            navigation.navigate('Profile', {
              githubUsername: username,
            })
          }
        />

        <Marker
          coordinate={{
            latitude: 51.05,
            longitude: -114.08,
          }}
          title="James Smith"
          description="@jamessmith"
          onCalloutPress={() =>
            navigation.navigate('Profile', {
              githubUsername: 'jamessmith',
            })
          }
        />
      </MapView>

      <RectButton style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </RectButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFill,
  },
  logoutButton: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 64,
    right: 24,
    height: 40,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#031A62',
    borderRadius: 4,
  },
  logoutText: {
    color: 'white',
  },
});