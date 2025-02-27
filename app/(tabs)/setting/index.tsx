import AuthRoute from "@/components/AuthRoute";
import CustomButton from "@/components/CustomButton";
import useAuth from "@/hooks/queries/useAuth";
import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function SettingScreen() {
  const { logout } = useAuth();

  return (
    <AuthRoute>
      <SafeAreaView>
        <CustomButton label="로그아웃(임시)" onPress={logout} />
      </SafeAreaView>
    </AuthRoute>
  );
}

const styles = StyleSheet.create({});
