import React, { useState, useEffect }from 'react';
import { useNavigation } from '@react-navigation/native';
import C from './style';

import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';

export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue('');

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [cpf, setCpf] = useState();
    const [password, setPassword] = useState('');
    const [password_confirm, setConfirmPassword] = useState('');
      
    useEffect(()=>{
        navigation.setOptions({
            headerTitle: 'Cadastro'
        })
    });
    
    const handleRegisterButton = async () => {
        if(name && email && cpf && password && password_confirm){
            let result = await api.register(name, email, cpf, password, password_confirm);
            if(result.error === ''){
               dispatch({type: 'setToken', payload: {token: result.token}}); 
               dispatch({type: 'setUser', payload: {user: result.user}}); 

               navigation.reset({
                index: 1,
                routes:[{name: 'ChoosePropertyScreen'}]
            });
            }else{
                alert(result.error);
            }
        }else{
            alert("Preencha os campos.");
        }
    };

    return (
        <C.Container>
            <C.Logo
                source={require('../../assets/logo.png')}
                resizeMode="contain"
            />
            
            <C.Field
                placeholder="Nome completo"
                value={name}
                onChangeText={t=>setName(t)}
            />
            <C.Field
                placeholder="E-mail"
                value={email}
                onChangeText={t=>setEmail(t)}
            />
            <C.Field
                placeholder="CPF"
                keyboardType="numeric"
                value={cpf}
                onChangeText={t=>setCpf(t)}
            />
            <C.Field
                placeholder="Senha"
                value={password}
                onChangeText={t=>setPassword(t)}
            />
            <C.Field
                placeholder="Confirme a senha"
                value={password_confirm}
                onChangeText={t=>setConfirmPassword(t)}
            />
            
            <C.ButtonArea onPress={handleRegisterButton}>
                <C.ButtonText>SALVAR</C.ButtonText>
            </C.ButtonArea>
        </C.Container>
    );
}