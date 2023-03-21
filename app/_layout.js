import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { ThemeProvider } from "../context/ThemeContext";

export const unstable_settings = {
  initialRouteName: "home",
};

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ThemeProvider>
      <Stack initialRouteName="home">
        <Stack.Screen name="home" />
      </Stack>
    </ThemeProvider>
  );
};

export default Layout;
