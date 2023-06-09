import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: (theme) => ({
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: theme === "light" ? COLORS.white : COLORS.darkGray,
    ...SHADOWS.medium,
    shadowColor: theme === "light" ? COLORS.white : COLORS.black,
  }),
  logoContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "70%",
    height: "70%",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  jobName: (theme) => ({
    fontSize: SIZES.medium,
    fontFamily: "DMBold",
    color: theme === "light" ? COLORS.primary : COLORS.lightWhite,
  }),
  jobType: {
    fontSize: SIZES.small + 2,
    fontFamily: "DMRegular",
    color: COLORS.gray,
    marginTop: 3,
    textTransform: "capitalize",
  },
});

export default styles;
