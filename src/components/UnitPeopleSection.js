import React, { useState } from 'react';
import { Linking } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Alert } from 'react-native';
import api from '../services/api';

const Box = styled.TouchableOpacity`   
`;
const Item = styled.View`
    background-color: #FFF;
    border-width: 1px;
    border-color: #0369ad;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 5px;
    flex-direction: row;
    align-items: center;
`;
const InfoArea = styled.View`
    flex: 1;
`;
const StrongText = styled.Text`
    font-size: 15px;
    font-weight: 700;
    color: #000;
    margin-left: 10px;
`;
const RegularText = styled.Text`
    font-size: 14px;
    font-weight: 400;
    color: #9C9DB9;
    margin-left: 10px;
`;
const RemoveButtom = styled.TouchableOpacity`
    width: 30px;
    height: 30px
`;

export default ({list, refreshFunction}) => {

    const handleRemove = async (index, item) => {
        Alert.alert(
            'Confirmação',
            `Tem certeza que deseja excluir ${item.name}`,
            [
                {text: 'Sim, tenho certeza', onPress:()=>removeItem(index)},
                {text: 'Cancelar', onPress: null, styled:'cancel'}
            ]
        );
    }

    const removeItem = async (index) => {
        let result = await api.removeUnitItem(
            'person',
            list[index].id);
        if(result.error === ''){
            refreshFunction();
        }else{
            alert(result.error);
        }
    }
    return (
        <Box>
            {list.map((item, index) => (
                <Item key={ index }>
                    <InfoArea>
                        <StrongText>{item.name}</StrongText>
                        <RegularText>Data de nascimento: {item.birthdate}</RegularText>
                    </InfoArea>
                    <RemoveButtom onPress={()=>handleRemove(index, item)}>
                        <Icon name="remove" size={24} color="#FF0000"/> 
                    </RemoveButtom>                    
                </Item>                
            ))}            
        </Box>
    );
}