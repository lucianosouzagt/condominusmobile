import styled from 'styled-components/native';

export default {
    Container: styled.SafeAreaView`
        flex: 1;
        padding: 20px;
        background-color: #F5F6FA;
    `,
    Text: styled.Text`
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 20px
    `,
    Logo: styled.Image`
        width : 100px;
        height: 100px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 40px;
        margin-top: 20px;
    `,
    Field: styled.TextInput`
        border-width: 1px;
        border-color: #CCC;
        background-color: #FFF;
        border-radius: 5px;
        color: #000;
        font-size: 15px;
        padding: 10px;
        margin-bottom: 15px;
    `,
    ButtonArea: styled.TouchableOpacity`
        background-color: #0e4e79;
        padding: 12px;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        margin-top: 15px;

    `,
    ButtonText: styled.Text`
        color: #FFF;
        font-size: 15px;
        font-weight: 700;
    `,
};