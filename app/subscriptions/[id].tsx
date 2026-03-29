import {Link, useLocalSearchParams, useRouter} from "expo-router";
import { Text, View } from "react-native";

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  return (
    <View>
            <Text>Subscription Details: {id}</Text>
            <Text onPress={() => router.back()}>Go back</Text>
        </View>
  );
};

export default SubscriptionDetails;
