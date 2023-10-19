import { StyleSheet } from "react-native";
import React from "react";
import { Box, Button } from "@react-native-material/core";
import ImageSection from "./ImageSection";
import CardSection from "./CardSection";
import SettingsSection from "./SettingsSection";
import CustomText from "../../components/CustomText";


// Become a Mentor Button function need to be check and fix.


export default function Profile() {
  const fiveSettingsData = [
    {
      icon: "account-settings",
      text: "Settings",
    },
    {
      icon: "credit-card",
      text: "Payment Details",
    },
    {
      icon: "trophy-award",
      text: "Achivements",
    },
    {
      icon: "heart",
      text: "Love ?????",
    },
    {
      icon: "cube",
      text: "Learning Reminders",
    },
  ];
  const threeCardsData = [
    {
      icon: "camera",
      text: "10 Hours",
    },
    {
      icon: "book",
      text: "10 Courses",
    },
    {
      icon: "star",
      text: "10 Hours",
    },
  ];
  const user = { user_id: 1, first_name: "Taha", last_name: "Demirer", isMentor: false };
  return (
    <Box w={"100%"} h={"100%"} style={styles.container}>
      <ImageSection user={user} />
      <Box style={styles.cardBox}>
      {
        threeCardsData.map((item) => {
          return (
            <CardSection
              icon={item.icon}
              text={item.text}
            />
          );
        })
      }
      </Box>
      <Box h={260} w={"100%"} style={styles.bot} >
        {
          fiveSettingsData.map((item) => {
            return (
              <SettingsSection
                icon={item.icon}
                text={item.text}
              />
              
            );
          })
        }
        
      </Box>
      
      {user.isMentor ? false : (
      <Box style={styles.Button}>
        <CustomText
          style={{
            color: "white",
            fontSize: 15,
            fontFamily: "Gilroy-Bold",
            textAlign: "center",
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          Become a Mentor
        </CustomText>
      </Box>)
      }
      
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: "5%",
    paddingLeft: "5%",
  },
  cardBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "15%",
    
  },
  bot: {
    maxHeight:260,
    width: "100%",
    height: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  Button: {
    backgroundColor: "#3D3DD8",
    borderRadius: 10,
    width: "50%",
    height: "5%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
});
