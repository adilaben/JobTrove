import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: (theme) => ({
    width: 40,
    height: 40,
    backgroundColor: theme === "dark" ? COLORS.darkGray : COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginHorizontal: 10,
  }),
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
});

export default styles;
