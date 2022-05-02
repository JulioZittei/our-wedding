import { useEffect, useState } from 'react';
import * as CountDownCss from '../styles/components/CountDownCss';
import { styled } from '../styles/stiches.config';
import moment from 'moment';

const Root = styled('section', CountDownCss.Root);
const Container = styled('div', CountDownCss.Container);
const Wrapper = styled('div', CountDownCss.Wrapper);
const TimeBox = styled('div', CountDownCss.TimeBox);
const Date = styled('span', CountDownCss.Date);
const Label = styled('span', CountDownCss.Label);

export function CountDown() {
  const weddingDate = '26/11/2022 18:00:00';
  const now = moment().format('DD/MM/YYYY HH:mm:ss');
  const diff = moment(weddingDate, 'DD/MM/YYYY HH:mm:ss').diff(moment(now, 'DD/MM/YYYY HH:mm:ss'));

  const [months, setMonths] = useState(moment.duration(diff).months());
  const [days, setDays] = useState(moment.duration(diff).days());
  const [hours, setHours] = useState(moment.duration(diff).hours());
  const [minutes, setMinutes] = useState(moment.duration(diff).minutes());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = moment().format('DD/MM/YYYY HH:mm:ss');
      const diff = moment(weddingDate, 'DD/MM/YYYY HH:mm:ss').diff(moment(now, 'DD/MM/YYYY HH:mm:ss'));
      setMonths(moment.duration(diff).months());
      setDays(moment.duration(diff).days());
      setHours(moment.duration(diff).hours());
      setMinutes(moment.duration(diff).minutes());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Root>
      <Container>
        <Wrapper>
          <TimeBox>
            <Date>{months.toString().length > 1 ? months : `0${months}`}</Date>
            <Label>{months == 1 ? 'Mês' : 'Meses'}</Label>
          </TimeBox>
          <TimeBox>
            <Date>{days.toString().length > 1 ? days : `0${days}`}</Date>
            <Label>{days == 1 ? 'Dia' : 'Dias'}</Label>
          </TimeBox>
          <TimeBox>
            <Date>{hours.toString().length > 1 ? hours : `0${hours}`}</Date>
            <Label>{hours == 1 ? 'Hora' : 'Horas'}</Label>
          </TimeBox>
          <TimeBox>
            <Date>{minutes.toString().length > 1 ? minutes : `0${minutes}`}</Date>
            <Label>{minutes == 1 ? 'Minuto' : 'Minutos'}</Label>
          </TimeBox>
        </Wrapper>
      </Container>
    </Root>
  );
}
