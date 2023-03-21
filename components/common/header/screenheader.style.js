import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: (theme) => ({
    width: 40,
    height: 40,
    backgroundColor: theme === "light" ? COLORS.white : COLORS.darkGray,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  }),
  btnImg: (dimension, theme, isImg) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
    tintColor: isImg
      ? undefined
      : theme === "light"
      ? COLORS.black
      : COLORS.white,
  }),
});

export default styles;
