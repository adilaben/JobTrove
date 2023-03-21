import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: (theme) => ({
    marginTop: SIZES.large,
    backgroundColor: theme === "light" ? "#FFF" : COLORS.black,
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
  }),
  title: (theme) => ({
    fontSize: SIZES.large,
    color: theme === "light" ? COLORS.primary : COLORS.white,
    fontFamily: FONT.bold,
  }),
  pointsContainer: {
    marginVertical: SIZES.small,
  },
  pointWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginVertical: SIZES.small / 1.25,
  },
  pointDot: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: COLORS.gray2,
    marginTop: 6,
  },
  pointText: (theme) => ({
    fontSize: SIZES.medium - 2,
    color: theme === "light" ? COLORS.gray : COLORS.gray2,
    fontFamily: FONT.regular,
    marginLeft: SIZES.small,
  }),
});

export default styles;
