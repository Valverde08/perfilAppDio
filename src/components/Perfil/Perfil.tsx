import { View, Image, Text } from "react-native";
import perfilFoto from "../../../assets/fperfil.png";
import style from "./PerfilStyle";

interface perfilProps {
  nome: string;
}

export default function Perfil({ nome }: perfilProps) {
  return (
    <>
      <View style={style.containerPerfil}>
        <Image style={style.perfilFoto} source={perfilFoto} />
        <Text>{nome}</Text>
      </View>
    </>
  );
}
