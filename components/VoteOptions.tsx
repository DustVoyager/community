import { colors } from "@/constants";
import { PostVoteOption } from "@/types";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface VoteOptionsProps {
  option: PostVoteOption;
  totalCount: number;
  isVoted: boolean;
  isSelected: boolean;
  onSelectOption: () => void;
}

function VoteOptions({
  option,
  totalCount,
  isVoted,
  isSelected,
  onSelectOption,
}: VoteOptionsProps) {
  const percent = option.userVotes.length
    ? Math.floor((option.userVotes.length / totalCount) * 100)
    : 0;

  return (
    <>
      {isVoted ? (
        <View style={styles.votedContainer}>
          <View style={[styles.percent, { width: `${percent}%` }]} />
          <Text style={styles.content}>{option.content}</Text>
          <Text style={styles.percentText}>
            {percent}% ({option.userVotes.length})
          </Text>
        </View>
      ) : (
        <Pressable
          onPress={onSelectOption}
          style={isSelected ? styles.selectedContainer : styles.container}
        >
          <Text style={styles.content}>{option.content}</Text>
        </Pressable>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 8,
    backgroundColor: colors.WHITE,
    borderWidth: 1,
    borderColor: colors.GRAY_300,
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
    alignItems: "center",
  },
  selectedContainer: {
    height: 44,
    borderRadius: 8,
    backgroundColor: colors.WHITE,
    borderWidth: 1,
    borderColor: colors.ORANGE_600,
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
    alignItems: "center",
  },
  content: {
    marginLeft: 10,
  },
  votedContainer: {
    height: 44,
    borderRadius: 8,
    backgroundColor: colors.ORANGE_200,
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
    alignItems: "center",
  },
  percent: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 44,
    backgroundColor: colors.ORANGE_300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  percentText: {
    marginRight: 10,
    fontWeight: "500",
  },
});

export default VoteOptions;
