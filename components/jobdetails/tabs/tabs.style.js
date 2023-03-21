import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    marginBottom: SIZES.small / 2,
    alignItems: "space-between",
  },
  btn: (name, activeTab, theme) => ({
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.large,
    backgroundColor:
      name === activeTab
        ? COLORS.tertiary
        : theme === "light"
        ? "#F3F4F8"
        : COLORS.darkGray,
    borderRadius: SIZES.medium,
    marginLeft: 2,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  btnText: (name, activeTab) => ({
    fontFamily: "DMMedium",
    fontSize: SIZES.small,
    color: name === activeTab ? COLORS.lightWhite : COLORS.gray,
  }),
});

export default styles;
