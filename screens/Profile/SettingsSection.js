import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Box } from '@react-native-material/core'
import CustomText from '../../components/CustomText'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SettingsSection({text,icon}) {
  return (
    <Box style={styles.container}>
        <Box style={styles.iconBox}>
            <MaterialCommunityIcons name={icon} style={styles.icon} />
        </Box>
        <CustomText style={styles.text}>{text}</CustomText>

    </Box>
    
  )
}const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        
    },
    iconBox: {
        backgroundColor: "#3D3DD8",
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 40,
        height: 40,
        
    },
    text: {
        color: "black",
        fontSize: 13,
        fontFamily:"Gilroy-Bold",
        marginLeft: 15,
    },
    icon: {
        color: "white",
        fontSize: 20,
    }
   
});