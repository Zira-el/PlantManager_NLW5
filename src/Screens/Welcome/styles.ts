import { StyleSheet, Dimensions } from "react-native";
import colors from "../../styles/colors";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
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

  image: {
    height: Dimensions.get("window").width * 0.8,
  },

  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 25,
    height: 56,
    width: 56,
  },

  buttonIcon: {
    textAlign: "center",
    fontSize: 30,
    color: colors.white,
  }
});
