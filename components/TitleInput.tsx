import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { StyleSheet } from "react-native";
import InputField from "./InputField";

function TitleInput({}) {
  const { control, setFocus } = useFormContext();

  return (
    <Controller
      name="title"
      control={control}
      rules={{
        validate: (data: string) => {
          if (data.length < 0) {
            return "제목을 입력해주세요.";
          }
        },
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputField
          autoFocus
          label="제목"
          placeholder="제목을 입력해주세요."
          submitBehavior="submit"
          returnKeyType="next"
          value={value}
          onChangeText={onChange}
          onSubmitEditing={() => setFocus("description")}
          error={error?.message}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({});

export default TitleInput;
