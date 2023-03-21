import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./nearbyjobcard.style";
import { checkImageURL } from "../../../../utils";
import { useContext } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";

const NearbyJobCard = ({ job, handleNavigate }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <TouchableOpacity style={styles.container(theme)} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(job?.employer_logo)
              ? job?.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName(theme)} numberOfLines={1}>
          {job?.job_title}
        </Text>

        <Text style={styles.jobType}>{job?.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
