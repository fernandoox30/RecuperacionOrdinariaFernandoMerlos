import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


import StudentScreen from '../screens/StudentScreen';
import ApiScreen from '../screens/ApiScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Student" component={StudentScreen} options={{title:'Card1'}} />
                <Stack.Screen name="Api" component={ApiScreen} 
                options={{presentation:'modal', title:'Informacion'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;