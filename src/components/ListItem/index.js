import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { styles } from "./styles";

const ListItem = ({ title, subtitle, onPress, style }) => {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {!! subtitle ? (<Text style={styles.subtitle}>{subtitle}</Text>) : null}
      </View>
      <Image source={require("../../assets/arrow.png")} style={styles.arrow} />
    </Pressable>
  );
};
export default React.memo(ListItem);
