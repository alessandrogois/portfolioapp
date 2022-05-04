import { StyleSheet } from "react-native";

const MyHistory = ({ navigation }) => {
  const funcao = () => {
    console.log("name");
  };
  return funcao();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default MyHistory;
