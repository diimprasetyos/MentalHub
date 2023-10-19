import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Box } from "@react-native-material/core";
import ProfileImage from "./ProfileImage";
import CustomText from "../../components/CustomText";

export default function ImageSection({ user }) {
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    setFullName(user?.first_name + " " + user?.last_name);
  }, []);
  return (
    <Box style={styles.container}>
      <ProfileImage id={1} />
      <CustomText
        style={{
          fontSize: 13,
          fontFamily: "Gilroy-Bold",
          marginTop: 12,
        }}
      >
        {fullName}
      </CustomText>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "30%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
