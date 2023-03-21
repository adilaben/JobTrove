import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: (selectedJob, item, theme) => ({
    width: 250,
    padding: SIZES.xLarge,
    backgroundColor:
      selectedJob === item?.job_id
        ? COLORS.tertiary
        : theme === "light"
        ? COLORS.white
        : COLORS.darkGray,
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  logoContainer: (selectedJob, item) => ({
    width: 50,
    height: 50,
    backgroundColor: selectedJob === item?.job_id ? "#FFF" : COLORS.lightWhite,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  }),
  logoImage: {
    width: "70%",
    height: "70%",
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  jobName: (selectedJob, item, theme) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color:
      selectedJob === item?.job_id
        ? COLORS.white
        : theme === "light"
        ? COLORS.primary
        : COLORS.lightWhite,
  }),
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  publisher: (selectedJob, item, theme) => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
    color:
      selectedJob === item?.job_id
        ? COLORS.white
        : theme === "light"
        ? COLORS.primary
        : COLORS.gray2,
  }),
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

export default styles;
