import React, { useState, useEffect }from 'react';
import { useNavigation } from '@react-navigation/native';
import { launchCamera} from 'react-native-image-picker';
import C from './style';

import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';


export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const[photo, setPhoto] = useState({});
    const[description, setDescription] = useState('');
    const[where, setWhere] = useState('');

    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Adicionar um Perdido',
        });
        handleAddPhoto();
    }, []);

        //1280
    const handleAddPhoto = () => {
        launchCamera({
            mediaTypes: 'photo',
            maxWidth: 1280,
            maxHeight:1280

        }, (response) => {
            if(!response.didCancel){

                console.log(response);
                setPhoto(response);
            }
        });
    };

    const handleSave = async () => {
        if(description !== '' && where !== '' && photo.uri !== ''){
            const result = await api.addLostItem(
                photo, where, description
            );
            if(result.error === ''){
                setPhoto({});
                setWhere('');
                setDescription('');
                navigation.navigate('FoundAndLostScreen');
            }else{
                console.log(result);
                alert(result.error);
            }
        }else{
            alert('Preencha os campos');
        }
    }
    return (
        <C.Container>
            <C.Scroller>
                <C.PhotoArea>
                    {!photo.uri &&
                        <C.ButtomArea onPress={handleAddPhoto}>
                            <C.ButtomText>Tirar foto</C.ButtomText>
                        </C.ButtomArea>
                    }
                    {photo.uri &&
                        <>
                            <C.PhotoItem source={{uri: photo.uri}} resizeMode="cover" />
                            <C.ButtomArea onPress={handleAddPhoto}>
                                <C.ButtomText>Tirar foto</C.ButtomText>
                            </C.ButtomArea>
                        </>
                    }
                </C.PhotoArea>
                <C.Title>Descreva o produto</C.Title>
                <C.Field
                    placeholder="Ex. Carteira de couro"
                    value={description}
                    onChangeText={t=>setDescription(t)}
                />
                <C.Title>Onde foi encontrado?</C.Title>
                <C.Field
                    placeholder="Ex. Na piscina"
                    value={where}
                    onChangeText={t=>setWhere(t)}
                />
                <C.ButtomArea onPress={handleSave}>
                    <C.ButtomText>SALVAR</C.ButtomText>
                </C.ButtomArea>
            </C.Scroller>
        </C.Container>
    );
}