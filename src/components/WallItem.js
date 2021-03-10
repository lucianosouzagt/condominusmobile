import React, { useState } from 'react';
import { Header } from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import api from '../services/api';

const Box = styled.View`
    background-color: #FFF;
    border-width: 1px;
    border-color: #0369ad;
    border-radius: 20px;
    padding: 15px;
    margin-bottom: 10px;
    
`;
const HeaderArea = styled.View`
    flex-direction: row;
    align-items: center;
`;
const InfoArea = styled.View`
    margin-left: 15px;
    flex: 1;
`;
const Title = styled.Text`
    font-size: 14px;
    font-weight: 700;
    color: #000;
`;
const Date = styled.Text`
    font-size: 13px;
    font-weight: 400;
    color: #9C9DB9;
`;
const Body = styled.Text`
    font-size: 15px;
    font-weight: 400;
    color: #000;
    margin: 15px 0;
`;
const FooterArea = styled.View`
    flex-direction: row;
    align-items: center;
`;
const LikeButton = styled.TouchableOpacity`
    width: 25px;
    height: 20px;
    justify-content: center;
    align-items: center;
`;
const LikeText = styled.Text`
    margin-left: 5px;
    font-size: 13px;
    font-weight: 400;
    color: #9C9DB9;
`;



export default ({data}) => {

    const [likeCount, setLikeCount] = useState(data.likes);
    const [liked, setLiked] = useState(data.liked);

    const handleLike = async () => {
        setLiked(!liked);
        let result = await api.likeWallPost(data.id);
        if(result.error === ''){
            setLikeCount(result.likes);
            setLiked(result.liked);
        }else{
            alert(result.error);
        }
    };
    return (
        <Box>
            <HeaderArea>
                <Icon name="newspaper-o" size={30} color="#0369ad"/>
                <InfoArea>
                    <Title>{data.title}</Title>
                    <Date>{data.datecreated}</Date>
                </InfoArea>
            </HeaderArea>
            <Body>
                {data.body}
            </Body>
            <FooterArea>
                <LikeButton onPress={handleLike}>
                    {liked ? 
                        <Icon name="heart" size={20} color="#FF0000"/>
                    : 
                    <Icon name="heart-o" size={20} color="#FF0000"/>
                    }                    
                </LikeButton>
                <LikeText>{likeCount} pessoa{likeCount==1?'':'s'} curti{likeCount==1?'u':'ram'}</LikeText>
            </FooterArea>
        </Box>
    );
}