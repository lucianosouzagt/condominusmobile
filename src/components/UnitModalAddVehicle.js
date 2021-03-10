import React, { useState } from 'react';
import styled from 'styled-components/native';
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

    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [color, setColor] = useState('');
    const [plate, setPlate] = useState('');
  
    const handleAdd = async () => {
        if(brand && model && color && plate){

            const result = await api.addUnitItem(
                'vehicle',
                { brand, model, color, plate }
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
            <Title>Adicionar novo veículo</Title>

            <Label>Marca:</Label>
            <Field 
                placeholder="Digite o marca do veículo"
                value={brand}
                onChangeText={t=>setBrand(t)}
            />

            <Label>Modelo:</Label>
            <Field 
                placeholder="Digite o modelo do veículo"
                value={model}
                onChangeText={t=>setModel(t)}
            />

            <Label>Cor:</Label>
            <Field 
                placeholder="Digite a cor"
                value={color}
                onChangeText={t=>setColor(t)}
            />
            <Label>Placa:</Label>
            <Field 
                placeholder="Digite a placa"
                value={plate}
                onChangeText={t=>setPlate(t)}
            />

            <ButtonArea>
                <SaveButton title="SALVAR" onPress={handleAdd} />
                <CancelButton title="CANCELAR" color="#FF0000" onPress={handleCancel} />
            </ButtonArea>
        </Box>
    );
}