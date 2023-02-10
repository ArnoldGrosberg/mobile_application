import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

const Favorites = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Favorites</Text>
      </View>
    </SafeAreaView>
  );
}

export default React.memo(Favorites);
