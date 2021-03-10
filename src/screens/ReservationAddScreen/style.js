import styled from 'styled-components/native';

export default {
    Container: styled.SafeAreaView`
        flex: 1;
        background-color: #F5F6FA;
    `,
    Text: styled.Text``,    
    Scroller: styled.ScrollView`
        flex: 1;
    `,    
    LoadingIcon: styled.ActivityIndicator`
        margin-top: 20px;
    `,
    CoverImage: styled.Image`
        background-color: #FFF;
        height: 180px;
    `,
    CalendarArea: styled.View`
        margin: 20px;
    `, 
    Title: styled.Text`
        font-size: 17px;
        color: #000;
        font-weight: 700;
        margin: 10px 20px;
    `,  
    TimeListArea: styled.View`
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-bottom: 30px;

    `,
    TimeItem: styled.TouchableOpacity`
        border-width: 1px;
        border-color: ${props=>props.active ? '#0e4e79':'#0369ad'};
        border-radius: 5px;
        margin: 5px 20px;
        background-color: ${props=>props.active ? '#0e4e79':'transparent'};
        padding: 10px 7px;

    `,
    TimeItemText: styled.Text`
        color: ${props=>props.active ? '#FFF':'#000'};
        font-size: 13px;
    `,
    ButtonArea: styled.TouchableOpacity`
        background-color: #0e4e79;
        padding: 12px;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        margin: 15px;
    `,
    ButtonText: styled.Text`
        color: #FFF;
        font-size: 15px;
        font-weight: 700;    
    `,
};