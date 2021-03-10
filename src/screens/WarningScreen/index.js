import React, { useState, useEffect }from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import C from './style';

import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';

import WarningItem from '../../components/WarningItem';

export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const[loading, setLoading] = useState(true);
    const[list, setList] = useState([]);

    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Livro de Ocorrências',
            headerRight: () => (
                <C.AddButton onPress={()=>navigation.navigate('WarningAddScreen')}>
                    <Icon name='plus' size={24} color='#000' />
                </C.AddButton>
            )
        });
        getWarnings();
    }, []);

    const getWarnings = async () => {
        setList([]);
        setLoading(true);
        const result = await api.getWarnings();
        setLoading(false);
        if(result.error ===''){
            setList(result.list);
        }else{
            alert(result.error);
        }
    }

    return (
        <C.Container>
                {!loading &&  list.length > 0 &&
                    <C.List 
                        data={list}
                        onRefresh={getWarnings}
                        refreshing={loading}
                        renderItem={({item})=><WarningItem data={item} />}
                        keyExtractor={(item)=>item.id.toString()}
                    />                   
                } 
                {!loading &&  list.length === 0 &&
                    <C.NoListArea>
                        <C.NoListText>Não há ocorrências.</C.NoListText>
                    </C.NoListArea>
                }              
        </C.Container>
    );
}