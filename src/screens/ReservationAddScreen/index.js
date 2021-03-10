import React, { useState, useEffect, useRef }from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import CalendarPicker from 'react-native-calendar-picker';
import C from './style';

import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';


export default () => {
    const scroll = useRef();
    const navigation = useNavigation();
    const route = useRoute();

    const [context, dispatch] = useStateValue();

    const[loading, setLoading] = useState(true);
    const[disabledDates, setDisabledDates] = useState([]);
    const[selectedDate, setSelectedDate] = useState(null);
    const[timeList, setTimelist] = useState([]);
    const[selectedTime, setSelectedTime] = useState(null);


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () =>{
            navigation.setOptions({
                headerTitle: `Reservar ${route.params.data.title}`,
            });
            getDisabledDates();
        });
        return unsubscribe;        
    }, [navigation, route]);

    useEffect(() => {
        getTimes();
    }, [selectedDate]);

    const minDate = new Date();
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);

    const getTimes = async () => {
        if(selectedDate){
            const result = await api.getReservationTimes(
                route.params.data.id,
                selectedDate
            );
            if(result.error === ''){
                setSelectedTime(null);
                setTimelist(result.list);
                setTimeout(()=>{
                    scroll.current.scrollToEnd();
                }, 500)
            }else{
                alert(result.error);
            }
        }
    };

    const getDisabledDates = async () => {
        setDisabledDates([]);
        setTimelist([]);
        setSelectedDate(null);
        setSelectedTime(null);
        setLoading(true);
        const result = await api.getDisabledDates(route.params.data.id);
        setLoading(false);
        if(result.error === ''){
            let dateList = [];
            for(let i in result.list){
                dateList.push( new Date(result.list[i]) );
            }
            setDisabledDates(dateList);
        }else{
            alert(result.error);
        }
    }

    const handleDateChange = (date) => {
        let dateEl = new Date(date);
        let year = dateEl.getFullYear();
        let month = dateEl.getMonth() + 1;
        let day = dateEl.getDate();

        month = month < 10 ? '0'+month : month;
        day = day < 10 ? '0'+day : day;

        setSelectedDate(`${year}-${month}-${day}`);
    }

    const showTextDate = (date) => {
        let dateEl = new Date(date);
        let year = dateEl.getFullYear();
        let month = dateEl.getMonth() + 1;
        let day = dateEl.getDate();

        month = month < 10 ? '0'+month : month;
        day = day < 10 ? '0'+day : day;

        return `${day}/${month}/${year}`;
    }
    const handleSave = async () => {
        if(selectedDate && selectedTime){
            const result = await api.setReservation(
                route.params.data.id,
                selectedDate,
                selectedTime
            );
            if(result.error === ''){
                navigation.navigate('ReservationMyScreen');
            }else{
                alert(result.error);
            }
        }
    }

    return (
        <C.Container>
            <C.Scroller ref={scroll} contentContainerStyle={{paddingBottom: 40}}>
                <C.CoverImage source={{uri: route.params.data.cover}} resizeMode="cover" /> 

                {loading &&
                    <C.LoadingIcon size="large" color="#0e4e79" />
                }
                {!loading &&
                    <C.CalendarArea>
                        <CalendarPicker 
                            onDateChange={handleDateChange}
                            disabledDates={disabledDates}
                            minDate={minDate}
                            maxDate={maxDate}
                            weekdays={['Dom','Seg','Ter','Qua','Qui','Sex','Sab']}
                            months={['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']}
                            previousTitle="Anterior"
                            nextTitle="Próximo"
                            selectedDayColor="#0e4e79"
                            selectedDayTextColor="#FFFFFF"
                            todayBackgroundColor="transparent"
                            todayTextStyle="#000000"
                        />
                    </C.CalendarArea>
                }
                {!loading && selectedDate &&
                    <>
                        <C.Title>Horários disponíveis em {showTextDate(selectedDate)}:</C.Title>
                        <C.TimeListArea>
                            {timeList.map((item,index)=>(
                                <C.TimeItem 
                                    key={index} 
                                    onPress={()=>setSelectedTime(item.id)}
                                    active={selectedTime === item.id}
                                >
                                    <C.TimeItemText
                                        active={selectedTime === item.id}
                                    >{item.title}</C.TimeItemText>
                                </C.TimeItem>
                            ))}
                        </C.TimeListArea>
                    </>

                }
            </C.Scroller>
            {!loading &&
                <C.ButtonArea onPress={handleSave}>
                    <C.ButtonText>RESERVAR</C.ButtonText>
                </C.ButtonArea>
            }    
        </C.Container>
    );
}