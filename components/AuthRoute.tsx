import React, { ReactNode } from "react";
import useAuth from "@/hooks/queries/useAuth";
import { router, useFocusEffect } from "expo-router";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

interface AuthRouteProps {
  children: ReactNode;
}

function AuthRoute({ children }: AuthRouteProps) {
  const { auth } = useAuth();

  useFocusEffect(() => {
    !auth.id && router.replace("/auth");
  });

  return <>{children}</>;
}

const styles = StyleSheet.create({});

export default AuthRoute;
