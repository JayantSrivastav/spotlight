import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/auth.styles";
import { Link } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

export default function Index() {
  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Spotlight</Text> */}
      {/* <Link href={"/notification"}>Feed screen in Tabs</Link> */}
      <TouchableOpacity onPress={() => signOut()}>
        <Text style={{ color: "white" }}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}
