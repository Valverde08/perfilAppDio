import { View, Image, Text, TouchableWithoutFeedback, TouchableWithoutFeedbackProps } from "react-native";
import perfilFoto from "../../../assets/fperfil.png";
import style from "./PerfilStyle";

interface perfilProps extends TouchableWithoutFeedbackProps {
  nome: string;
}

export default function Perfil({ nome, ... rest }: perfilProps) {
  return (
    <TouchableWithoutFeedback {... rest} >
      <View style={style.containerPerfil}>
        <Image style={style.perfilFoto} source={perfilFoto} />
        <Text>{nome}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
