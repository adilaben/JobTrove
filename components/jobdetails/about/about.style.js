import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: (theme) => ({
    marginTop: SIZES.large,
    backgroundColor: theme === "light" ? "#FFF" : COLORS.black,
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
  }),
  headText: (theme) => ({
    fontSize: SIZES.large,
    color: theme === "light" ? COLORS.primary : COLORS.white,
    fontFamily: FONT.bold,
  }),
  contentBox: {
    marginVertical: SIZES.small,
  },
  contextText: (theme) => ({
    fontSize: SIZES.medium - 2,
    color: theme === "light" ? COLORS.gray : COLORS.gray2,
    fontFamily: FONT.regular,
    marginVertical: SIZES.small / 1.25,
  }),
});

export default styles;
