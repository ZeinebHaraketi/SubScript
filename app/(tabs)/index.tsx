import { icons } from "@/constants/icons";
import { styled } from "nativewind";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <FlatList
        ListHeaderComponent={() => (
          <>
            <View className="home-header">
              <View className="home-user">
                <Image
                  // source={user?.imageUrl ? { uri: user.imageUrl } : images.avatar}
                  className="home-avatar"
                />
                <Text className="home-user-name">ZeinebHa</Text>
              </View>

              <Pressable>
                <Image source={icons.add} className="home-add-icon" />
              </Pressable>
            </View>
          </>
        )}
        data={[]}
        // keyExtractor={(item) => item.id}
        renderItem={({ item }) => <></>}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text className="home-empty-state">No subscriptions yet.</Text>
        }
        contentContainerClassName="pb-30"
      />
    </SafeAreaView>
  );
}
