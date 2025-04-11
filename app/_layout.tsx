import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import InitialLayout from "@/components/intialLayout";

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
          <InitialLayout />
          {/* <Stack.Screen name="index" options={{ title: "Feed" }} />
          <Stack.Screen
            name="notification"
            options={{ title: "Notifications"}}
          />
        </Stack> */}
        </SafeAreaView>
      </SafeAreaProvider>
    </ClerkProvider>
  );
}
