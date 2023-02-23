import { StyleSheet, Dimensions } from "react-native";

import { colors } from "../../../utils/colors";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: height * 0.45,
  },
  content: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: -40,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 8,
  },
  description: {
    color: colors.textGrey,
    fontWeight: "300",
    marginVertical: 8,
  },
  footer: {
    padding: 24,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 5,
  },
  save: {
    flex: 1,
  },
  bookmarkContainer: {
    backgroundColor: colors.lightGrey,
    padding: 18,
    borderRadius: 8,
    marginRight: 16,
  },
  bookmarkIcon: {
    marginTop: 55,
    padding: 18,
    borderRadius: 8,
    marginRight: 16,
    width: 54,
    height: 54,
  },
  backContainer: {
    backgroundColor: colors.white,
    padding: 10,
    margin: 24,
    borderRadius: 8,
    position: "absolute",
  },
  backIcon: {
    width: 20,
    height: 20,
  },
});
