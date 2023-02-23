import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";

const ListItem = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Image source={require("../../assets/arrow.png")} style={styles.icon} />
    </View>
  );
};
export default React.memo(ListItem);
