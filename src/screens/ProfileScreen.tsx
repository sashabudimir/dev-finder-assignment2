import { WebView } from 'react-native-webview';

export default function ProfileScreen({ route }: any) {
  const { githubUsername } = route.params;

  return (
    <WebView
      style={{ flex: 1 }}
      source={{ uri: `https://github.com/${githubUsername}` }}
    />
  );
}