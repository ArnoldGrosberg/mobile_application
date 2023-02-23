import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";

const GoogleLogin = () => {
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  return (
    <TouchableOpacity
      onPress={signIn}
      activeOpacity={0.6}
      style={styles.container}>
      <Image source={require("../../assets/google.png")} style={styles.image} />
    </TouchableOpacity>
  );
};

export default GoogleLogin;
