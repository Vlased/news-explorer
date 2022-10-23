import Main from "../screens/Main";
import Article from "../screens/Article";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={Main} options={{title: 'Main'}} />
          <Stack.Screen name="Article" component={Article} options={{title: 'Back'}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
export default MainStack;