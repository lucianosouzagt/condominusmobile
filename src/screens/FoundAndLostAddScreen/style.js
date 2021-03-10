import styled from 'styled-components/native';

export default {
    Container: styled.SafeAreaView`
        flex: 1;
        background-color: #F5F6FA;
    `,  
    Scroller: styled.ScrollView`
        flex: 1;
        padding: 20px;
    `,
    PhotoArea: styled.View``,
    PhotoItem: styled.Image`
        height: 200px;
        border-radius: 5px;
        margin-bottom: 5px;
    `,
    Title: styled.Text`
        font-size: 17px;
        color: #000;
        margin: 10px 0;
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
    ButtomArea: styled.TouchableOpacity`
        background-color: #0e4e79;
        padding: 12px;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        margin-top: 15px;
    `,
    ButtomText: styled.Text`
        color: #FFF;
        font-size: 15px;
        font-weight: 700;
    `,
};