import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const ButtonText = (props) => {
  const funcao = () => {
    console.log(props.path);
  };

  return (
    <TouchableOpacity onPress={() => funcao(props.name)} style={styles.botao}>
      <Text style={styles.text}>{props.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    textAlign: "center",
  },

  botao: {
    backgroundColor: "purple",
    padding: 10,
    borderRadius: 6,
    margin: 30,
  },
});
export const Names = () => {
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
};

/* //Fazer um map do arrai pra exibir tudo num botão só (Uma Lista)
const data = [
    {name: 'name', path: 'path'},
    {name: 'name', path: 'path'},
    {name: 'name', path: 'path'},
  ]; */
