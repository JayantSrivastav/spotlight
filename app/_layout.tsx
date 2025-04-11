import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
        <Stack screenOptions={{ headerShown: false }} />
        {/* <Stack.Screen name="index" options={{ title: "Feed" }} />
          <Stack.Screen
            name="notification"
            options={{ title: "Notifications"}}
          />
        </Stack> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
