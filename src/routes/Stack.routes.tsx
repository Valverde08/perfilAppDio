import { createStackNavigator, Header } from "@react-navigation/stack";
import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";

const { Navigator, Screen } = createStackNavigator();

export default function Stackroutes() {
  return (
    <Navigator>
      <Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
