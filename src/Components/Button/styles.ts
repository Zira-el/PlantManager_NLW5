import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 25,
    height: 56,
    width: 90,
  },

  buttonText: {
    textAlign: "center",
    fontSize: 18,
    color: colors.white,
  }
})