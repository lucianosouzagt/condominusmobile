import React, { useState } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import api from '../services/api';

const Box = styled.TouchableOpacity`
    width: 200px;    
    background-color: #FFF;
    border-width: 1px;
    border-color: #0369ad;
    border-radius: 5px;
    margin-right: 20px;
`;
const Photo = styled.Image`
    background-color: #FFF;
    height: 150px;
    border-radius: 5px;
`;
const Title = styled.Text`
    font-size: 18px;
    color: #000;
    margin: 10px;
    height: 50px;
`;
const InfoTitle = styled.Text`
    color: #9C9DB9;
    font-weight: 700;
    margin: 10px 10px 0 10px;
`;
const InfoText = styled.Text`
    color: #000;
    font-weight:700;
    margin: 0 10px 10px 10px;
`;
const MineButtom = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #0e4e79;
    padding: 10px;
    border-radius: 5px;
    margin: 10px;
`;
const MineButtomText = styled.Text`
    color: #FFF;
    font-weight:700;
    margin-left: 10px;
`;


export default ({data, showButton, refreshFunction}) => {
    
    const handleIsMine = () => {
        Alert.alert(
            'Confirmação',
            'Tem certeza que esse item é seu?',
            [
                {text: 'Sim é meu', onPress: handleSetRecovered},
                {text: 'Cancelar', onPress: null, style: 'cancel'}
            ]
        )
    }

    const handleSetRecovered = async () => {
        const result = api.setRecovered(data.id);
        if(result.error === ''){
            refreshFunction();
            alert('Pegue seu item perdido na portaria.');
            alert(result.error);
        }else{
            alert(result.error);
        }
    }
    return (
        <Box >
            <Photo source={{uri: data.photo}} resizeMode="cover" /> 
            <Title>{data.description}</Title>
        
            <InfoTitle>Encontrado em:</InfoTitle>
            <InfoText>{data.where}</InfoText>

            <InfoTitle>Data:</InfoTitle>
            <InfoText>{data.datecreated}</InfoText>
            {showButton &&
                <MineButtom onPress={handleIsMine}>
                    <Icon name="hand-pointer-o" size={24} color={"#FFF"} />
                    <MineButtomText>É meu!</MineButtomText>
                </MineButtom>
            }            
        </Box>
    );
}