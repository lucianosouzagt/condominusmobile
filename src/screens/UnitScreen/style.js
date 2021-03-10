import styled from 'styled-components/native';

export default {
    Container: styled.SafeAreaView`
        flex: 1;
        background-color: #F5F6FA;
    `,
    Text: styled.Text``,    
    Scroller: styled.ScrollView`
        flex: 1;
        padding: 20px;
    `,
    LoadingIcon: styled.ActivityIndicator``,
    TitleArea: styled.View`
        flex-direction: row;
        padding: 10px;
    `, 
    Title: styled.Text`
        font-size: 17px;
        color: #000;
        flex: 1;
    `,
    SubTitle: styled.Text`
        font-size: 15px;
        color: #9C9DB9;
        flex: 1;
        text-align: center;
    `,
    TitleAddButtom: styled.TouchableOpacity`
        width: 30px;
        height: 30px;
    `, 
    ListArea: styled.View`
        margin-bottom: 20px;
    `,
    ModalArea: styled.Modal`
        margin-bottom: 20px;
    `,
    ModalBg: styled.View`
        flex: 1;
        background-color: rgba(0, 0, 0, 0.5);
    `,
    ModalBody: styled.ScrollView`
        margin: 80px 30px;
        border-radius: 5px;
        background-color: #FFF;
    `,
};