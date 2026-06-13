import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location';
import { LatLng } from 'react-native-maps';

export const DEFAULT_LOCATION: LatLng = {
  latitude: 51.03,
  longitude: -114.093,
};

export async function tryGetCurrentPosition(): Promise<LatLng> {
  const { status } = await requestForegroundPermissionsAsync();

  if (status === 'granted') {
    const { coords } = await getCurrentPositionAsync();
    return {
      latitude: coords.latitude,
      longitude: coords.longitude,
    };
  }

  throw new Error('Permission has not been granted.');
}