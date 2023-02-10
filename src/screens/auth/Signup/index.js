import React, { useState } from "react";
import { View, Text } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import { styles } from "./styles";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";

import { SafeAreaView } from "react-native-safe-area-context";

const Signup = ({ navigation }) => {
  const [checked, setChecked] = useState(false);

  const onBack = () => {
    navigation.goBack();
  };

  const onSignin = () => {
    navigation.navigate('Signin');
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AuthHeader onBackPress={onBack} title="Sign Up" />
        <Input label="Name" placeholder="John Doe" />
        <Input label="Email" placeholder="example@gmail.com" />
        <Input label="Password" placeholder="******" isPassword />
        <View style={styles.agreeRow}>
          <Checkbox checked={checked} onCheck={setChecked} />
          <Text style={styles.agreeText}>
            I agree to the{" "}
            <Text style={styles.agreeTextBold}>Terms of Service</Text> and{" "}
            <Text style={styles.agreeTextBold}>Privacy Policy</Text>
          </Text>
        </View>
        <Button style={styles.button} onPress={() => console.log("Clicked")} title="Sign Up" />
        <Separator text="Or Sign up with" />
        <GoogleLogin />
        <Text style={styles.footerText}>
          Already have an account? <Text onPress={onSignin} style={styles.footerLink}>Sign In</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default React.memo(Signup);
