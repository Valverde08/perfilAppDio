import { Linking, View } from "react-native";
import React, { useState } from "react";
import Perfil from "../../components/Perfil/Perfil";

import styles from "./ProfileStyle";
import Skills from "../../components/Skills/Skills";
import StatusButton from "../../components/StatsButton/StatusButton";

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
    <View style={styles.mainContainerProfile}>
      <Perfil nome="Minhas Habilidades" />
      <View style={styles.startCOntainer}>
        <Skills name="CSS" />
        <Skills name="HTML" />
        <Skills name="JS Script" />
      </View>

      <StatusButton
        name="Fale Comigo"
        onPress={() => Linking.openURL("https://www.whatsapp.com")}
      />
    </View>
  );
}
