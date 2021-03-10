import styled from 'styled-components/native';

export default {
    Container: styled.SafeAreaView`
        flex: 1;
        background-color: #F5F6FA;
        padding: 10px;
    `,
    Scroller: styled.ScrollView`
        flex: 1;
        padding: 10px
    `,
    Title: styled.Text`
        font-size: 17px;
        color: #000;
        font-weight: 400;
        margin: 10px 0; 
    `,
    Field: styled.TextInput`
        border-width: 1px;
        border-color: #0369ad;
        background-color: #FFF;
        border-radius: 5px;
        color: #000;
        font-size: 15px;
        font-weight: 400;
        padding: 10px
    `,
    PhotoArea: styled.View`
        margin-bottom: 30px
    `,
    PhotoScroll: styled.ScrollView`
        flex: 1;
    `,
    PhotoAddButton: styled.TouchableOpacity`
        width: 65px;
        height: 65px;
        justify-content: center;
        align-items: center;
        border-width: 1px;
        border-color: #0369ad;
        border-radius: 5px;
    `,
    PhotoItem: styled.View`
        width: 65px;
        border-width: 1px;
        border-color: #0369ad;
        border-radius: 5px;
        padding-bottom: 5px;
        margin-left: 5px;
        align-items: center;
    `,
    Photo: styled.Image`
        width: 63px;
        height: 63px;
        margin-bottom: 5px;
        border-radius: 5px;
    `,
    PhotoRemoveButtom: styled.TouchableOpacity``,
    LoadingIcon: styled.ActivityIndicator``,
    Loading: styled.View`
        flex-direction: row;
        align-items: center;
        margin-bottom: 5px;
    `,
    LoadingText: styled.Text`
        font-size:13px;
        margin: 10px 5px;
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

};