import { StyleSheet, Text, View } from "react-native";

type Card = {
  title: string;
};

export default function Card({ title }: Card) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  title: {},
});
