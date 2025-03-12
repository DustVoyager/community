import { colors } from "@/constants";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import {
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import VoteInput from "./VoteInput";

function VoteModal() {
  const { control, setValue } = useFormContext();
  const [isVoteOpen] = useWatch({ control, name: ["isVoteOpen"] });
  const { fields } = useFieldArray({ control, name: "voteOptions" });

  console.log("fields", fields);

  return (
    <Modal visible={isVoteOpen} animationType="slide">
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Pressable
            onPress={() => setValue("isVoteOpen", false)}
            style={styles.headerLeft}
          >
            <Feather name="arrow-left" size={28} color={colors.BLACK} />
          </Pressable>
          <Text style={styles.headerTitle}>투표</Text>
          <Text style={styles.headerRight}>첨부</Text>
        </View>
        {fields.map((field, index) => {
          return <VoteInput key={field.id} index={index} />;
        })}
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLeft: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.BLACK,
  },
  headerRight: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.ORANGE_600,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});

export default VoteModal;
