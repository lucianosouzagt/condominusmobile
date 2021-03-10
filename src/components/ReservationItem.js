import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Box = styled.TouchableOpacity`
    background-color: #FFF;
    border-width: 1px;
    border-color: #0369ad;
    border-radius: 10px;
    padding-bottom: 10px;
    margin-bottom: 15px;
`;
const CoverImage = styled.Image`
    background-color: #FFF;
    height: 150px;
    border-radius: 10px;
`;
const Title = styled.Text`
    font-size: 18px;
    color: #000;
    font-weight: 700;
    margin: 10px;
`;
const DateText = styled.Text`
    font-size: 13px;
    color: #9C9DB9;
    font-weight: 700;
    margin: 0 10px;
    text-transform: uppercase;
`;
const DateItem = styled.Text`
    font-size: 13px;
    color: #000;
    font-weight:400;
    margin: 0 10px;
`;


export default ({data}) => {
    const navigation = useNavigation();
    const handleClick = ( )=> {
        navigation.navigate('ReservationAddScreen', {data})
    }
    return (
        <Box onPress={handleClick}>
            <CoverImage source={{uri: data.cover}} resizeMode="cover" /> 
            <Title>{data.title}</Title>
            <DateText>Horários de funcionanmento:</DateText>
            {data.dates.map((item, index)=>(
                <DateItem key={index}>{item}</DateItem>
            ))}
        </Box>
    );
}