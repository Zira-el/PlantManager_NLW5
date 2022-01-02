import React from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity } from "react-native";
import { style } from "./styles";

import wateringImg from '../../assets/watering.png';

export function Welcome() {
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.title}>
        Gerencie {`\n`}
        suas plantas de {`\n`}
        forma fácil
      </Text>
      <Image source={wateringImg} />
      <Text style={style.subTitle}>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>
      <TouchableOpacity
        style={style.button}
        activeOpacity={0.8}
      >
        <Text>
          >
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}