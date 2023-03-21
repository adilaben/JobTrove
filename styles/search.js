import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  searchTitle: (theme) => ({
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: theme === "light" ? COLORS.primary : COLORS.white,
  }),
  noOfSearchedJobs: (theme) => ({
    marginTop: 2,
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
    color: theme === "light" ? COLORS.primary : COLORS.lightWhite,
  }),
  loaderContainer: {
    marginTop: SIZES.medium,
  },
  footerContainer: {
    marginTop: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  paginationButton: {
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.tertiary,
  },
  paginationImage: {
    width: "60%",
    height: "60%",
    tintColor: COLORS.white,
  },
  paginationTextBox: (theme) => ({
    width: 30,
    height: 30,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme === "light" ? COLORS.white : COLORS.darkGray,
  }),
  paginationText: (theme) => ({
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: theme === "light" ? COLORS.primary : COLORS.white,
  }),
});

export default styles;
