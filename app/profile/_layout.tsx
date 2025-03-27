import { Link, router, Stack } from "expo-router";
import { colors } from "@/constants";
import { Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function ProfileLayout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: colors.BLACK,
        contentStyle: {
          backgroundColor: colors.WHITE,
        },
      }}
    >
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: true,
          headerBackButtonDisplayMode: "minimal",
          headerShadowVisible: false,
          headerTitle: "",
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              <Feather name="arrow-left" size={28} color={"balck"} />
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
}
