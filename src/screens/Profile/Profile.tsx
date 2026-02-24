import { View, Text, Button, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Perfil from "../../components/Perfil/Perfil";
import Skills from "../../components/Skills/Skills";

export default function Profile() {
  const [ligado,setLigado] = useState<boolean>(false)
  
      function switchStart(){
          return setLigado(!ligado)
      }
  
  return (
    <View>
      <Perfil nome="Minhas Habilidades" />
      {ligado ? (<TouchableWithoutFeedback onPress={switchStart}>
                    <Text>CLicque Aqui para ligar</Text>
                 </TouchableWithoutFeedback>):
            (
            <TouchableWithoutFeedback onPress={switchStart}>
                    <Text>CLicque Aqui para desligar</Text>
            </TouchableWithoutFeedback>)}
    </View>
  );
}
