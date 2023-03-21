import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  userName: (theme) => ({
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: theme === "light" ? COLORS.secondary : COLORS.white,
  }),
  welcomeMessage: (theme) => ({
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: theme === "light" ? COLORS.primary : COLORS.white,
    marginTop: 4,
  }),
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: (theme) => ({
    flex: 1,
    backgroundColor: theme === "light" ? COLORS.lightWhite : COLORS.darkGray,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  }),
  searchInput: (theme) => ({
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
    color: theme === "dark" ? COLORS.gray2 : COLORS.black,
  }),
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: activeJobType === item ? 2 : 1,
    borderColor: activeJobType === item ? COLORS.tertiary : COLORS.gray2,
  }),
  tabText: (activeJobType, item, theme) => ({
    fontFamily: FONT.xLarge,
    color:
      activeJobType === item
        ? theme === "light"
          ? COLORS.tertiary
          : "#5762FF"
        : COLORS.gray2,
  }),
});

export default styles;
