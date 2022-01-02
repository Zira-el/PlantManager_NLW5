import React from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import wateringImg from '../../assets/watering.png';
import { Button } from "../../Components/Button";

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {`\n`}
        suas plantas de {`\n`}
        forma fácil
      </Text>
      <Image source={wateringImg} />
      <Text style={styles.subTitle}>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>
      < Button title="Avançar" />
    </SafeAreaView>
  )
}