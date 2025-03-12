import { Button, Text, View, StyleSheet } from "react-native";
import AnswerOption from "./AnswerOption";
import { QuestionCardProps } from "../types";

export default function QuestionCard({ question }: QuestionCardProps) {
  const selectedOption = question.options[2];
  const onOptionSelect = (option: string) => {
    console.warn(` Option selected: ${option}`);
  };
  return (
    <View style={styles.questionCard}>
      <Text style={styles.question}>{question.title}</Text>
      <View style={{ gap: 10 }}>
        {question.options.map((option, index) => (
          <AnswerOption
            key={option}
            option={option}
            isSelected={question.options[0] === selectedOption}
            onPress={() => onOptionSelect(question.options[0])}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  questionCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    paddingVertical: 40,
    // Shadows
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  question: {
    fontSize: 24,
    fontWeight: 500,
  },
});
