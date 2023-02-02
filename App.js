import React from "react";
import { SafeAreaView } from "react-native";
import MainScreen from "./src/screens/app/MainScreen";
import Time from "./src/components/Time";

const App = () => {
  return (
    <SafeAreaView>
      <MainScreen title="Time" /><Time />
    </SafeAreaView>
  );
}
export  default App;
