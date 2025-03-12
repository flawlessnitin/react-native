import { StyleSheet, Text, View, Pressable } from "react-native";
import { AnswerOptionProps } from "../types";

const AnswerOption = ({ option, isSelected, onPress }: AnswerOptionProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: isSelected ? "#E1F396" : "white",
          borderColor: isSelected ? "#E1F396" : "lightgray",
        },
      ]}
    >
      <Text>{option}</Text>
    </Pressable>
  );
};

export default AnswerOption;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 20,
    borderRadius: 100,
  },
});
