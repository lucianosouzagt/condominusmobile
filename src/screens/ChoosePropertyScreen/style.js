import styled from 'styled-components/native';

export default {
    Container: styled.SafeAreaView`
        flex: 1;
        background-color: #F5F6FA;
    `,
    Text: styled.Text``,
    ExitButtonArea: styled.TouchableOpacity`
        background-color: #0e4e79;
        padding: 12px;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        margin: 20px;
    `,
    ExitButtonText: styled.Text`
        color: #FFF;
        font-size: 15px;
        font-weight: 700;
    `,
    ButtonArea: styled.TouchableOpacity`
        background-color: #FFF;
        border-width: 1px;
        border-color: #0369ad;
        padding: 15px;
        border-radius: 20px;
        margin-bottom: 10px;
    `,
    ButtonText: styled.Text`
        color: #000;
        font-size: 15px;
        font-weight: 700;
        text-align: center;
    `,
    Scroller: styled.ScrollView`
        flex: 1;
        padding: 20px;
    `,
    LoadingIcon: styled.ActivityIndicator``,
    HeadTitle: styled.Text`
        font-size: 16px;
        color: #000;
        text-align: center;
        margin-top: 10px;
    `,
    SubTitle: styled.Text`
        font-size: 14px;
        color: #000;
        text-align: center;
        margin-top: 10px;
    `,
    BigArea: styled.View`
        margin: 50px 0;
        align-items: center;
    `,
    PropertyList: styled.View`
        margin: 20px 0;
    `
};