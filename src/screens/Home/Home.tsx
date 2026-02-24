import { Text, TouchableWithoutFeedback, View } from "react-native";
import * as Linking from "expo-linking";
import style from "./HomeStyle";
import StatusButton from "../../components/StatsButton/StatusButton";
import Perfil from "../../components/Perfil/Perfil";
import { useNavigation } from "@react-navigation/native";



export default function Home() {
  const navigation = useNavigation()
  return (
    <View style={style.containerHomeMain}>
      
      
      <Perfil
       nome="Vinicius"
       onPress={()=>navigation.navigate('profile')}
       />

      <StatusButton
        name="Linkedin"
        onPress={() => Linking.openURL("https://www.google.com")}
      />
      <StatusButton
        name="Github"
        onPress={() => Linking.openURL('https://github.com/?locale=pt-BR')}
      />
      <StatusButton
        name="E-mail"
        onPress={() => Linking.openURL("mailto:support@example.com")}
      />
    </View>
  );
}
