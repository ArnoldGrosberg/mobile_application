import React from "react";
import { Text, View } from "react-native";
import {styles} from "./styles";

const MainScreen = ({title}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}
export default MainScreen;
