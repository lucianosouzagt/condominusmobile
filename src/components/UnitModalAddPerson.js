import React, { useState } from 'react';
import styled from 'styled-components/native';
import DatePicker from 'react-native-date-picker';
import api from '../services/api';

const Box = styled.TouchableOpacity`
    padding: 20px;
`;
const Title = styled.Text`
    font-size: 18px;
    font-weight: 700;
    color: #000;
    margin-left: 10px;
    text-align: center;
`;
const Label = styled.Text`
    font-size: 16px;
    color: #000;
    margin-bottom: 10px;
`;
const Field = styled.TextInput`
    border-width: 1px;
    border-color: #CCC;
    background-color: #FFF;
    border-radius: 5px;
    color: #000;
    font-size: 15px;
    padding: 10px;
    margin-bottom: 15px;
`;
const ButtonArea = styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin-top: 50px;
`;
const SaveButton = styled.Button`
    flex: 1;
`;
const CancelButton = styled.Button`
    flex: 1;
`;

export default ({ refreshFunction, setShowModal, setModalType }) => {

    const [name, setName] = useState('');
    const [date, setDate] = useState(new Date());
  
    const handleAdd = async () => {
        if(name && date){
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            month = month < 10 ? '0'+month : month;
            day = day < 10 ? '0'+day : day;

            let birthdate = `${year}-${month}-${day}`;
            const result = await api.addUnitItem(
                'person',
                { name, birthdate }
            );
            if(result.error === ''){
                refreshFunction();
                setShowModal(false);
                setModalType('');
            }else{
                alert(result.error);
            }
        }else{
            alert('Preencha os campos.');
        }
    }

    const handleCancel = () => {
        setShowModal(false);
        setModalType('');
    }

    return (
        <Box>
            <Title>Adicionar novo morador</Title>

            <Label>Nome Completo:</Label>
            <Field 
                placeholder="Digite o nome completo"
                value={name}
                onChangeText={t=>setName(t)}
            />

            <Label>Data de nascimento:</Label>
            <DatePicker 
                mode="date"
                date={date}
                onDateChange={setDate}
                locale="pt-BR"
            />

            <ButtonArea>
                <SaveButton title="SALVAR" onPress={handleAdd} />
                <CancelButton title="CANCELAR" color="#FF0000" onPress={handleCancel} />
            </ButtonArea>
        </Box>
    );
}