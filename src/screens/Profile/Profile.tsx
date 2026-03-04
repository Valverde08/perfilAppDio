import {
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Perfil from "../../components/Perfil/Perfil";
import Skills from "../../components/Skills/Skills";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Profile() {
  const [star1, setStar1] = useState<boolean>(true);

  const [star2, setStar2] = useState<boolean>(true);

  const [star3, setStar3] = useState<boolean>(true);

  function switchStar1() {
    if (!star2) {
      return;
    }
    if (!star3) {
      return;
    }
    setStar1(!star1);
  }

  function switchStar2() {
    if (!star3) {
      return;
    }
    if (!star1) {
      setStar2(!star2);
    }
  }
  function switchStar3() {
    if (!star2) {
      setStar3(!star3);
    }
  }

  return (
    <View>
      <Perfil nome="Minhas Habilidades" />
      {star1 ? (
        <TouchableWithoutFeedback onPress={switchStar1}>
          <AntDesign name="star" size={24} color="black" />
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={switchStar1}>
          <AntDesign name="star" size={24} color="yellow" />
        </TouchableWithoutFeedback>
      )}
      {star2 ? (
        <TouchableWithoutFeedback onPress={switchStar2}>
          <AntDesign name="star" size={24} color="black" />
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={switchStar2}>
          <AntDesign name="star" size={24} color="yellow" />
        </TouchableWithoutFeedback>
      )}
      {star3 ? (
        <TouchableWithoutFeedback onPress={switchStar3}>
          <AntDesign name="star" size={24} color="black" />
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={switchStar3}>
          <AntDesign name="star" size={24} color="yellow" />
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}
