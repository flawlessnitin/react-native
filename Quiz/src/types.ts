export type AnswerOptionProps = {
  option: string;
  isSelected: boolean;
  onPress: () => void;
};

export type QuestionCardProps = {
  question: Question;
};

export type Question = {
  title: string;
  options: string[];
  correctAnswer: string;
};
