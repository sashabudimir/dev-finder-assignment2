import { StyleSheet, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

interface BigButtonProps {
  label: string;
  color?: string;
  style?: {};
  testID?: string;
  onPress: () => void;
}

export default function BigButton({
  label,
  color = '#031A62',
  style,
  onPress,
  testID,
}: BigButtonProps) {
  const styles = styling(color);

  return (
    <RectButton testID={testID} style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </RectButton>
  );
}

function styling(color: string) {
  return StyleSheet.create({
    button: {
      paddingVertical: 14,
      paddingHorizontal: 32,
      backgroundColor: color,
      height: 56,
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      color: '#FFF',
      fontSize: 16,
    },
  });
}