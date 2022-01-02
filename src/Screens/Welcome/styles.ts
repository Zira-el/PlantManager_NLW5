import { StyleSheet } from "react-native";
import colors from "../styles/colors";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 60,
  },

  title: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
    color: colors.heading,
    marginTop: 28
  },

  subTitle: {
    fontSize: 17,
    textAlign: "center",
    color: colors.heading,
  },

  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 25,
    height: 56,
    width: 56,
  }
});
