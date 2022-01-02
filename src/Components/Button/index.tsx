import React from "react";
import { View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export const Button = ({ title, ...rest }: ButtonProps) => (
  <TouchableOpacity
    style={styles.button}
    activeOpacity={0.8}
  >
    <Text style={styles.buttonText}>
      {title}
    </Text>
  </TouchableOpacity>
)