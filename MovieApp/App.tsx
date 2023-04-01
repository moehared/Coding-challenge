import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import AppTabs from "./src/navigation/Tabs";
import { FavoriteProvider } from "./src/state/local/favourite_context";
export default function App() {
  return (
    <FavoriteProvider>
      <NavigationContainer>
        <AppTabs />
      </NavigationContainer>
    </FavoriteProvider>
  );
}
