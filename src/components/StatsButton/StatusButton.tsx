import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import style from "./StatusButtonStyle";

interface statusButtonProps extends TouchableOpacityProps {
  name: string;
}

export default function StatusButton({ name, ...rest }: statusButtonProps) {
  return (
    <TouchableOpacity {...rest} style={style.buttonSize}>
      <Text style={style.Label}>{name}</Text>
    </TouchableOpacity>
  );
}
