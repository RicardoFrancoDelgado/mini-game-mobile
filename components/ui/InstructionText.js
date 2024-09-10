import { Text, StyleSheet } from "react-native";

function InstructionText({ children, style }) {
  return <Text style={[styles.instructionTitle, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionTitle: {
    color: "#f6f6f6",
    fontSize: 24,
    textAlign: "center",
  },
});

export default InstructionText;
