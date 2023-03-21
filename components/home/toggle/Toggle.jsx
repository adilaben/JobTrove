import React, { useContext } from "react";
import { TouchableOpacity, Image } from "react-native";
import { icons } from "../../../constants";
import { ThemeContext } from "../../../context/ThemeContext";
import styles from "../toggle/toggle.style.js";

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <TouchableOpacity style={styles.btnContainer(theme)} onPress={toggleTheme}>
      <Image
        source={theme === "light" ? icons.moon : icons.sun}
        resizeMode="cover"
        style={styles.btnImg("80%")}
      />
    </TouchableOpacity>
  );
};

export default Toggle;
