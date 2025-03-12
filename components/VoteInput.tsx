import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import InputField from "./InputField";

interface VoteInputProps {
  index: number;
}

function VoteInput({ index }: VoteInputProps) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={`voteOptions.${index}.content`}
      render={({ field: { onChange, value } }) => (
        <InputField value={value} onChangeText={onChange} />
      )}
    ></Controller>
  );
}

const styles = StyleSheet.create({});

export default VoteInput;
