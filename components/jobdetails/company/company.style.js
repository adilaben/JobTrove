import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  logoBox: {
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: SIZES.large,
  },
  logoImage: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
  jobTitleBox: {
    marginTop: SIZES.small,
  },
  jobTitle: (theme) => ({
    fontSize: SIZES.large,
    color: theme === "light" ? COLORS.primary : COLORS.white,
    fontFamily: FONT.bold,
    textAlign: "center",
  }),
  companyInfoBox: {
    marginTop: SIZES.small / 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  companyName: (theme) => ({
    fontSize: SIZES.medium - 2,
    color: theme === "light" ? COLORS.primary : COLORS.lightWhite,
    fontFamily: FONT.medium,
  }),
  locationBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  locationImage: {
    width: 25,
    height: 25,
    tintColor: COLORS.gray,
  },
  locationName: (theme) => ({
    fontSize: SIZES.medium - 2,
    color: theme === "light" ? COLORS.gray : COLORS.gray2,
    fontFamily: FONT.regular,
    marginLeft: 2,
  }),
});

export default styles;
