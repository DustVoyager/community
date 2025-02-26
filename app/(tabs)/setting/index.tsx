import AuthRoute from "@/components/AuthRoute";
import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function SettingScreen() {
  return (
    <AuthRoute>
      <SafeAreaView>
        <Text>설정 스크린</Text>
      </SafeAreaView>
    </AuthRoute>
  );
}

const styles = StyleSheet.create({});
