import React, { useState } from 'react';
import { Linking } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Box = styled.TouchableOpacity`
    background-color: #FFF;
    border-width: 1px;
    border-color: #0369ad;
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 10px;
    flex-direction: row;
    align-items: center;
    
`;
const Title = styled.Text`
    font-size: 15px;
    font-weight: 400;
    color: #000;
    margin-left: 10px;
`;

export default ({data}) => {

    const handleClick = async () => {
        const supported = await Linking.canOpenURL( data.fileurl );
        if(supported) {
            await Linking.openURL( data.fileurl );
        }
    }

    return (
        <Box onPress={handleClick}>
            <Icon name="file-text" size={30} color="#0369ad"/>
            <Title>{data.title}</Title>
        </Box>
    );
}