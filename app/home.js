import { useContext, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Toggle,
  Welcome,
} from "../components";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const { theme } = useContext(ThemeContext);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme === "light" ? "#fff" : COLORS.black,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: {
            color: theme === "light" ? COLORS.black : COLORS.white,
            flex: 1,
            backgroundColor: theme === "light" ? "#fff" : COLORS.black,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <>
              <Toggle />
              <ScreenHeaderBtn
                iconUrl={images.profile}
                dimension="100%"
                isImg="true"
              />
            </>
          ),
          headerTitle: "",
          headerTitleAlign: "center",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
