import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaLista from "./src/screens/TelaLista";
import TelaFormulario from "./src/screens/TelaFormulario";
import { Button, Icon } from "@rneui/base";
import { View } from "react-native";
const Stack = createNativeStackNavigator();

export default function App() {

  

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TelaLista"
        screenOptions={{
          headerStyle:{backgroundColor:'green'},
          headerTintColor:'white'
        }}
      >

        <Stack.Screen
        name='TelaForm'
        component={TelaFormulario}
        options={{title:'Tela Formulário'}}
        />

        <Stack.Screen
        name='TelaLista'
        component={TelaLista}
        options={({navigation})=>{
          return{
            title:'Tela listagem',
            headerRight:()=>(
              <View style={{flexDirection:'row'}}>

              <Button type="clear" onPress={()=>navigation.navigate('TelaForm')}
              icon={<Icon name='add' color='white' />}/>
              <Button type="outline" onPress={()=>navigation.navigate('TelaForm')}
              icon={<Icon name='add' color='white'/>}/>
              <Button onPress={()=>navigation.navigate('TelaForm')}
              icon={<Icon name='add' color='white'/>}/>
              </View>
            )
          }
        }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>

  );
}
