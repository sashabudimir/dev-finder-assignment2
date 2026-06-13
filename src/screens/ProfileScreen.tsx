import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProfileScreen({ route, navigation }: any) {
  const username = route.params.githubUsername;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>GitHub Profile</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{username.charAt(0).toUpperCase()}</Text>
        </View>

        <Text style={styles.name}>Linus Torvalds</Text>
        <Text style={styles.username}>@{username}</Text>

        <View style={styles.stats}>
          <Text>8.7k followers</Text>
          <Text>0 following</Text>
        </View>

        <Text style={styles.sectionTitle}>Achievements</Text>
        <Text style={styles.badges}>🏆 ⭐ 🚀 💻 🔥</Text>

        <Text style={styles.sectionTitle}>Popular repositories</Text>

        <View style={styles.repo}>
          <Text style={styles.repoTitle}>linux</Text>
          <Text>Linux kernel source tree</Text>
        </View>

        <View style={styles.repo}>
          <Text style={styles.repoTitle}>subsurface</Text>
          <Text>Divelog program</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f1f5f9' },
  header: {
    backgroundColor: '#101847',
    paddingTop: 40,
    paddingBottom: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: { color: 'white', marginRight: 30 },
  headerTitle: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  card: {
    margin: 25,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#101847',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: { color: 'white', fontSize: 26, fontWeight: 'bold' },
  name: { fontSize: 24, fontWeight: 'bold', marginTop: 12 },
  username: { color: '#555', marginBottom: 10 },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  sectionTitle: { fontWeight: 'bold', marginTop: 18, marginBottom: 8 },
  badges: { fontSize: 28 },
  repo: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  repoTitle: { fontWeight: 'bold', color: '#1f6feb' },
});