import React, { useState, useEffect }from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import C from './style';

import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';

export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const[loading, setLoading] = useState(true);
   
    useEffect(()=>{
        navigation.setOptions({
            headerTitle: 'Propriedades'
        })
        const checkPropertySel = async () => {
            let property = await AsyncStorage.getItem('property');
            if(property){
                property = JSON.parse(property);
                await chooseProperty(property);
            }
            setLoading(false);
        };
        checkPropertySel();
    },[]);

    const chooseProperty = async (property) => {
        await AsyncStorage.setItem('property', JSON.stringify(property));
        
        dispatch({
            type: 'setProperty',
            payload: {
                property
            }
        });
        
        navigation.reset({
            index: 1,
            routes:[{name: 'MainDrawer'}]
        }); 

    };

    const handleLogoutButton = async () => {
        await api.logout();
        navigation.reset({
            index: 1,
            routes:[{name: 'LoginScreen'}]
        });       
    };
    
    return (
        <C.Container>
            <C.Scroller>
                {loading &&
                    <C.LoadingIcon  color= "#0e4e79"  size= "large" />
                }
                 {!loading && context.user.user.properties.length > 0 &&
                    <>
                        <C.HeadTitle>Olá, {context.user.user.name}.</C.HeadTitle>
                        <C.SubTitle>Escolha uma das propriedades.</C.SubTitle>
                        <C.PropertyList>
                            {context.user.user.properties.map((item, index)=>(
                                <C.ButtonArea key={index} onPress={()=>chooseProperty(item)}>
                                    <C.ButtonText>{item.name}</C.ButtonText>
                                </C.ButtonArea>
                            ))}
                        </C.PropertyList>
                    </>
                }
                {!loading && context.user.user.properties.length <= 0 &&
                    <C.BigArea>
                        <C.HeadTitle>{context.user.user.name}, parabéns pelo cadastro!</C.HeadTitle>
                        <C.HeadTitle>Aguarde a administração liberar o seu acesso.</C.HeadTitle>                        
                    </C.BigArea>
                }
               
            </C.Scroller>
            <C.ExitButtonArea onPress={handleLogoutButton}>
                <C.ExitButtonText>SAIR</C.ExitButtonText>
            </C.ExitButtonArea>
        </C.Container>
    );
}