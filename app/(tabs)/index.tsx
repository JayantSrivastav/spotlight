import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/auth.styles";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Spotlight</Text> */}
      <Link href={"/notification"}>Feed screen in Tabs</Link>
    </View>
  );
}
