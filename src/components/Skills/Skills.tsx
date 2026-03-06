import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedbackProps,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./SkillsStyle";

interface skillsProps {
  name: string;
}
export default function Skills({ name }: skillsProps) {
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
    <View style={styles.mainStarContent}>
      <Text style={styles.textContainer}>{name}</Text>
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
