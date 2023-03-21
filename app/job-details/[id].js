import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useContext, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import { ThemeContext } from "../../context/ThemeContext";
import useFetch from "../../hook/useFetch";

const tabs = ["About", "Qualifications", "Responsibilities"];

const JobDetails = () => {
  const params = useSearchParams();
  const router = useRouter();

  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: params.id,
  });

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [refreshing, setRefreshing] = useState(false);
  const { theme } = useContext(ThemeContext);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  const displayTabContent = () => {
    switch (activeTab) {
      case "Qualifications":
        return (
          <Specifics
            title="Qualifications"
            points={data[0].job_highlights?.Qualifications ?? ["N/A"]}
            theme={theme}
          />
        );

      case "About":
        return (
          <JobAbout
            info={data[0].job_description ?? "No data provided"}
            theme={theme}
          />
        );

      case "Responsibilities":
        return (
          <Specifics
            title="Responsibilities"
            points={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
            theme={theme}
          />
        );

      default:
        return null;
    }
  };

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
            backgroundColor: theme === "light" ? "#fff" : COLORS.black,
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          ),
          headerTitle: "",
        }}
      />

      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading ? (
            <ActivityIndicator
              size="large"
              color={theme === "light" ? COLORS.primary : "#5762FF"}
            />
          ) : error ? (
            <Text
              style={{
                color: theme === "dark" ? COLORS.gray2 : COLORS.black,
              }}
            >
              Something went wrong
            </Text>
          ) : data.length === 0 ? (
            <Text
              style={{
                color: theme === "dark" ? COLORS.gray2 : COLORS.black,
              }}
            >
              No data available
            </Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Company
                companyLogo={data[0].employer_logo}
                jobTitle={data[0].job_title}
                companyName={data[0].employer_name}
                location={data[0].job_country}
                theme={theme}
              />

              <JobTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                theme={theme}
              />

              {displayTabContent()}
            </View>
          )}
        </ScrollView>

        <JobFooter
          url={
            data[0]?.job_google_link ??
            "https://careers.google.com/jobs/results/"
          }
          theme={theme}
        />
      </>
    </SafeAreaView>
  );
};

export default JobDetails;
