import { Button, View } from "react-native";
import * as Linking from "expo-linking";
import style from "./HomeStyle";
import StatusButton from "../../components/StatsButton/StatusButton";
import Perfil from "../../components/Perfil/Perfil";

export default function Home() {
  return (
    <View style={style.containerHomeMain}>
      <Perfil nome="Vinicius" />

      <StatusButton
        name="Linkedin"
        onPress={() => Linking.openURL("https://www.google.com")}
      />
    </View>
  );
}
