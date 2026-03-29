import { Link } from "expo-router";
import { Text, View } from "react-native";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>

      <Link href="/onboarding">
        <Text className="mt-4 rounded-2xl bg-primary text-white p-4">Go to Onboarding</Text>
      </Link>

      <Link href="/(auth)/sign-in">
        <Text className="mt-4 rounded-2xl bg-primary text-white p-4">Go to Sign In</Text>
      </Link>

      <Link href="/(auth)/sign-up">
        <Text className="mt-4 rounded-2xl bg-primary text-white p-4">Go to Sign Up</Text>
      </Link>
    </View>
  );
}
