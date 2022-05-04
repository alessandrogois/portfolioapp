import { StyleSheet, View } from "react-native";
import { ButtonText } from "../components/Button";

const HomeScreen = ({ navigation }) => {
  /* const funcao = () => {
    console.log(name);
  }; */

  const data = [
    {
      name: "Quem Sou",
      path: "home",
    },
    {
      name: "Portfólio",
      path: "portfolio",
    },
    {
      name: "Redes Sociais",
      path: "social",
    },

    {
      name: "Contato",
      path: "contact",
    },
  ];

  return (
    <View>
      {data.map((item) => {
        return <ButtonText name={item.name} key={item.name} path={item.path} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default HomeScreen;
