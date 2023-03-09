import React, { useContext, useState } from "react";
import { View, Text, Alert } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import { styles } from "./styles";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
import axios from "axios";

import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "../../../../App";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Signup = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const [values, setValues] = useState({});
  const { user, setUser } = useContext(UserContext);


  const onBack = () => {
    navigation.goBack();
  };

  const onSignin = () => {
    navigation.navigate("Signin");
  };

  const onChange = (key, value) => {
    setValues(v => ({ ...v, [key]: value }));
  };

  const onSubmit = () => {
    if (!values?.fullName || !values?.email || !values?.password) {
      Alert.alert("All fields are required!");
      return;
    }
    if (!checked) {
      Alert.alert("Please agree with the terms");
      return;
    }
    axios.post("http://192.168.18.4/api/user/register", values)
      .then(response => {
        console.log("signup => ", response);
        const { email, password } = values;
        axios.post("http://192.168.18.4/api/user/login", values)
          .then(async (response) => {
            console.log("login => ", response);
            const accessToken = response?.data?.accessToken;
            console.log(accessToken);
            setUser({ accessToken });
            if (response?.data?.token) {
              await AsyncStorage.setItem('auth_token', `${response?.data?.token}`)
            }
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AuthHeader onBackPress={onBack} title="Sign Up" />
        <Input value={values.fullName} onChangeText={(v) => onChange("fullName", v)} label="Name"
               placeholder="John Doe" />
        <Input value={values.email} onChangeText={(v) => onChange("email", v)} label="Email"
               placeholder="example@gmail.com" />
        <Input value={values.password} onChangeText={(v) => onChange("password", v)} label="Password"
               placeholder="******" isPassword />
        <View style={styles.agreeRow}>
          <Checkbox checked={checked} onCheck={setChecked} />
          <Text style={styles.agreeText}>
            I agree to the{" "}
            <Text style={styles.agreeTextBold}>Terms of Service</Text> and{" "}
            <Text style={styles.agreeTextBold}>Privacy Policy</Text>
          </Text>
        </View>
        <Button onPress={onSubmit} style={styles.button} title="Sign Up" />
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
