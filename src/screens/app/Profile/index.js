import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import ListItem from "../../../components/ListItem";
import Button from "../../../components/Button";
import { styles } from "./styles";

const Profile = () => {
  const num = 10;

  const onLogout = () => {
    console.log("logout is clicked");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Header title="Profile" showLogout onLogout={onLogout} />
          <Text style={styles.name}>User name</Text>
          <Text style={styles.email}>User email</Text>

          <ListItem title="My Listings" subtitle={`Already have ${num} listings`} />
          <ListItem title="Settings" subtitle="Account, FAQ, Contact" />
        </View>
        <Button title="Add New Listing" />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Profile);
