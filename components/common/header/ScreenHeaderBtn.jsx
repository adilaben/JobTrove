import React, { useContext } from "react";
import { TouchableOpacity, Image } from "react-native";
import { ThemeContext } from "../../../context/ThemeContext";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress, isImg }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <TouchableOpacity style={styles.btnContainer(theme)} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension, theme, isImg)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
