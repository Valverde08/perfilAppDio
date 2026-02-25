import { View, Text, Button, TouchableWithoutFeedback, TouchableNativeFeedback } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Perfil from "../../components/Perfil/Perfil";
import Skills from "../../components/Skills/Skills";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Profile() {
  const [star1,setStar1] = useState<boolean>(false)

  const [star2,setStar2] = useState<boolean>(false)

  const [star3,setStar3] = useState<boolean>(false)
  
  function switchStars(){
    setStar1(!star1)
    if (star1){
      setStar2(!star2)
      if(star2){
        setStar3(!star3)
      }
    }
    
  }
      
  
  return (
    <View>
      <Perfil nome="Minhas Habilidades" />
      {star1?(<TouchableWithoutFeedback onPress={switchStars}>
        <AntDesign name="star" size={24} color="black" />
        </TouchableWithoutFeedback>):(<TouchableWithoutFeedback onPress={switchStars}>
        <AntDesign name="star" size={24} color="yellow" />
        </TouchableWithoutFeedback>)}
      
    </View>
  );
}
