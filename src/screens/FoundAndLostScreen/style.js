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
    Title: styled.Text`
        font-size: 17px;
        color:#000;
        margin: 10px 20px
    `,    
    ProductScroller: styled.ScrollView`
        width: 100%;
        padding-left: 20px;
        margin-bottom: 20px;
    `,
    AddButton: styled.TouchableOpacity`
        margin-right: 15px;
    `,
};