import React, { useEffect }from 'react';
import { useNavigation } from '@react-navigation/native';
import C from './style';

import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';

export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();
    useEffect(()=>{
        const checkLogin = async () => {
            let token = await api.getToken();

            if(token){
                let result = await api.validadeToken();
                if(result.error === ''){
                    dispatch({type:'setUser', payload:{user: result.user}});
                    navigation.reset({
                        index: 1,
                        routes:[{name: 'ChoosePropertyScreen'}]
                    });
                }else{
                    alert(result.error);
                    dispatch({type:'setToken', payload:{token: ''}});
                    navigation.reset({
                        index: 1,
                        routes:[{name: 'LoginScreen'}]
                    });
                }
            }else{
                navigation.reset({
                    index: 1,
                    routes:[{name: 'LoginScreen'}]
                });
            }
        }

        checkLogin();
    }, []);
    
    
    return (
        <C.Container>
            <C.LoadingIcon color="#0e4e79" size="large" />
        </C.Container>
    );
}