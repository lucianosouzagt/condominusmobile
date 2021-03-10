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
    ButtonArea: styled.TouchableOpacity`
        background-color: #0e4e79;
        padding: 12px;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
    `,
    ButtonText: styled.Text`
        color: #FFF;
        font-size: 15px;
        font-weight: 700;
    `,
    Title: styled.Text`
        font-size: 18px;
        color: #000;
        font-weight: 700;
        margin: 10px 0;
    `,
    LoadingIcon: styled.ActivityIndicator``,
    NoListArea: styled.View`
        justify-content: center;
        align-items: center;
        padding: 30px
    `,
    NoListText: styled.Text`
        font-size: 17px;
        color: #000;
    `,
    List: styled.FlatList`
    flex: 1;
    `,
};