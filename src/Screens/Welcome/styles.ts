import { StyleSheet } from "react-native";
import colors from "../../styles/colors";


export const styles = StyleSheet.create({
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

});
