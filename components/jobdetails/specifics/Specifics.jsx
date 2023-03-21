import { View, Text } from "react-native";

import styles from "./specifics.style";

const Specifics = ({ title, points, theme }) => {
  return (
    <View style={styles.container(theme)}>
      <Text style={styles.title(theme)}>{title}:</Text>

      <View style={styles.pointsContainer}>
        {points.map((item, index) => (
          <View style={styles.pointWrapper} key={item + index}>
            <View style={styles.pointDot} />
            <Text style={styles.pointText(theme)}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Specifics;
