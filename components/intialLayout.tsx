import { useAuth } from "@clerk/clerk-expo";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

export default function InitialLayout() {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;
    const inAuthScreen = segments[0] === "(auth)";
    
    if (!isSignedIn && !inAuthScreen) router.replace("/(auth)/login");
    else if (isSignedIn && inAuthScreen) router.replace("/(tabs)");
  }, [isLoaded, isSignedIn, segments]);
  if (!isLoaded) return null;
  // If the user is signed in and the auth screen is not in the segments, show the tabs
  // If the user is not signed in and the auth screen is in the segments, show the auth screen
  return <Stack screenOptions={{ headerShown: false }} />;
}
