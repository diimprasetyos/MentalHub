import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { Box } from '@react-native-material/core';
import CustomText from '../../components/CustomText';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function CardSection({text,icon}) {
   
  return (
    <Box style={styles.container}>
        <Box style={styles.CardBox} w={100} h={50}>
            <MaterialCommunityIcons name={icon} style={styles.icon} />
            <CustomText style={styles.text1}>{text}</CustomText>
        </Box>
        
    </Box>
  )
}
const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    CardBox: {
        backgroundColor: "#3D3DD8",
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    text1: {
        color: "white",
        fontSize: 12,
    },
    icon: {
        color: "white",
        fontSize: 20,
    }

   

});