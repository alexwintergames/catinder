import React, { useState } from "react";
import { View, Image, Button, StyleSheet } from "react-native";

export default function App() {
  const animais = [
    require("./assets/gato1.jpg"),
    require("./assets/gato2.png"),
    require("./assets/gato3.jpg"),
    require("./assets/gato4.jpg"),
    require("./assets/gato5.avif"),
    require("./assets/gato6.webp"),
    require("./assets/gato7.webp"),
  ];

  const [indice, setIndice] = useState(0);
  const [corBorda, setCorBorda] = useState("#000");

  function trocarImagem() {
    const novoIndice = (indice + 1) % animais.length;
    setIndice(novoIndice);
  }

  function gostei() {
    setCorBorda("green");
    setTimeout(() => {
      setCorBorda("#000");
      trocarImagem();
    }, 1000);
  }

  function naoGostei() {
    setCorBorda("red");
    setTimeout(() => {
      setCorBorda("#000");
      trocarImagem();
    }, 1000);
  }

  return (
    <View style={styles.container}>
      <Image
        source={animais[indice]}
        style={[styles.imagem, { borderColor: corBorda }]}
      />
      <View style={styles.botoes}>
        <Button title="Gostei" color="green" onPress={gostei} />
        <Button title="Não Gostei" color="red" onPress={naoGostei} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  imagem: {
    width: 300,
    height: 300,
    borderWidth: 5,
    borderRadius: 10,
    marginBottom: 20,
  },
  botoes: {
    flexDirection: "row",
    gap: 10,
  },
});
