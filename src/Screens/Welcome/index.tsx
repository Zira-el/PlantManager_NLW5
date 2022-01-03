import React from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import wateringImg from '../../assets/watering.png';
import { Feather } from '@expo/vector-icons';

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {`\n`}
        suas plantas de {`\n`}
        forma fácil
      </Text>
      <Image
        source={wateringImg}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.subTitle}>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
      >
        <Text>
          <Feather
            name="chevron-right"
            style={styles.buttonIcon}
          />
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}