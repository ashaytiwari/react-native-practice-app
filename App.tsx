import { StatusBar, Text, View } from "react-native";

import CategoriesScreen from "./src/screens/CategoriesScreen";
import { Colors } from "./src/helpers/colors";

function App() {

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.darkBGColor} />
      <CategoriesScreen />
    </>
  );

}

export default App;