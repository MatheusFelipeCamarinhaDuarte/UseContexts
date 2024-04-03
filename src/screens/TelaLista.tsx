import { Text,Button, Avatar, ListItem, Icon } from "@rneui/base";
import { View } from "react-native";
import { FlatList } from "react-native";
import dadosUsuario from "../dados/dadosUsuario";

function getUsuarios({item}){


    return(
        <ListItem>
            <Avatar source={{uri:item.fotoPerfil}}
            rounded
            size={60}
            />
            <ListItem.Content>
                <ListItem.Title>{item.nome}</ListItem.Title>
                <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
                {/* <ListItem>{item.nome}</ListItem> */}
            </ListItem.Content>

            <ListItem.Content right style={{flexDirection:'row'}}>
                <Button 
                icon={<Icon name='edit' color='orange'/>}
                type='clear'
                // onPress={}
                />
                <Button 
                icon={<Icon name='delete' color='red'/>}
                type='clear'
                // onPress={}
                />
            </ListItem.Content>


        </ListItem>
    )
}

export default props =>{
    return(
        <View>

        <Text>Tela Listagem</Text>
        <FlatList
        data={dadosUsuario}
        renderItem={getUsuarios}
        />
        </View>
        )
}



